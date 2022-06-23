import React, { useState, useEffect } from "react";
import {
    Switch,
    List,
    Button,
    Modal as ModalAntd,
    notification,
} from "antd";
import {
    EditOutlined,
    UserDeleteOutlined,
    UserSwitchOutlined,
    UserAddOutlined,
} from "@ant-design/icons";
import {activateSubject, deleteSubject } from "../../../../api/subject";
import { getAccesToken } from "../../../../api/auth";
import EditSubjectForm from "../EditSubject";
import AddSubjectForm from "../AddSubject";
import Modal from "../../../Modal";

const { confirm } = ModalAntd;

export default function ListSubjects(props) {
    /* page subject */
    const { subjectsActive, subjectsInactive, setReloadSubjects } = props;
    const [viewSubjectsActive, setViewSubjectsActive] = useState(true);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    const addSubjectModal = () => {
        setIsVisibleModal(true);
        setModalTitle("Creando nueva asignatura");
        setModalContent(
            <AddSubjectForm
                setIsVisibleModal={setIsVisibleModal}
                setReloadSubjects={setReloadSubjects}
            />
        );
    };

    return (
        <div className="list-subjects">
            <div className="list-subjects__header">
                <div className="list-subjects__header-switch">
                    <List.Item
                        actions={[
                            <Button type="primary" onClick={addSubjectModal}>
                                <UserAddOutlined />
                            </Button>,
                        ]}
                    >
                        <List.Item.Meta
                            title={
                                <span>
                                    {viewSubjectsActive ? "Asignaturas Activas" : "Asignaturas Inactivas"}
                                </span>
                            }
                            avatar={
                                <Switch
                                    defaultChecked
                                    onChange={() => setViewSubjectsActive(!viewSubjectsActive)}
                                />
                            }
                        ></List.Item.Meta>
                    </List.Item>
                </div>
            </div>

            {viewSubjectsActive ? (
                <SubjectsActive
                    subjectsActive={subjectsActive}
                    setIsVisibleModal={setIsVisibleModal}
                    setModalTitle={setModalTitle}
                    setModalContent={setModalContent}
                    setReloadSubjects={setReloadSubjects}
                />
            ) : (
                <SubjectsInactive
                    subjectsInactive={subjectsInactive}
                    setReloadSubjects={setReloadSubjects}
                />
            )}

            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
            >
                {modalContent}
            </Modal>
        </div>
    );
}

function SubjectsActive(props) {
    const {
        subjectsActive,
        setIsVisibleModal,
        setModalTitle,
        setModalContent,
        setReloadSubjects,
    } = props;

    const editSubject = (subject) => {
        setIsVisibleModal(true);
        setModalTitle(
            `Editar ${subject.departament ? subject.name_user : "..."}`
        );
        setModalContent(
            <EditSubjectForm
                subject={subject}
                setIsVisibleModal={setIsVisibleModal}
                setReloadSubjects={setReloadSubjects}
            />
        );
    };

    return (
        <List
            className="subjects-active"
            itemLayout="horizontal"
            dataSource={subjectsActive}
            renderItem={(subject) => (
                <SubjectActive
                    subject={subject}
                    editSubject={editSubject}
                    setReloadSubjects={setReloadSubjects}
                />
            )}
        />
    );
}

function SubjectActive(props) {
    const { subject, editSubject, setReloadSubjects } = props;

    const desactiveSubject = () => {
        const accesToken = getAccesToken();

        activateSubject(accesToken, subject._id, false)
            .then((response) => {
                notification["success"]({
                    message: response,
                });
                setReloadSubjects(true);
            })
            .catch((err) => {
                notification["error"]({
                    message: err,
                });
            });
    };

    const showDeleteConfirm = () => {
        const accesToken = getAccesToken();

        confirm({
            title: "Eliminando usuario",
            content: `¿Estas seguro que quieres eliminar a ${subject.email}?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
                deleteSubject(accesToken, subject._id)
                    .then((response) => {
                        notification["success"]({
                            message: response,
                        });
                        setReloadSubjects(true);
                    })
                    .catch((err) => {
                        notification["error"]({
                            message: err,
                        });
                    });
            },
        });
    };

    return (
        <List.Item
            actions={[
                <Button type="primary" onClick={() => editSubject(subject)}>
                    <EditOutlined />
                </Button>,
                <Button type="danger" onClick={desactiveSubject}>
                    <UserSwitchOutlined />
                </Button>,
                <Button type="danger" onClick={showDeleteConfirm}>
                    <UserDeleteOutlined />
                </Button>
            ]}
        >
            <List.Item.Meta
                title={`
                ${subject.academic_activity ? subject.academic_activity : "..."} 
            `}
                description={subject.activity_code}
            />
        </List.Item>
    );
}

function SubjectsInactive(props) {
    const { subjectsInactive, setReloadSubjects } = props;

    return (
        <List
            className="users-active"
            itemLayout="horizontal"
            dataSource={subjectsInactive}
            renderItem={(subject) => (
                <UserInactive subject={subject} setReloadSubjects={setReloadSubjects} />
            )}
        />
    );
}

function UserInactive(props) {
    const { subject, setReloadSubjects } = props;

    const activateSubjectF = () => {
        const accesToken = getAccesToken();

        activateSubject(accesToken, subject._id, true)
            .then((response) => {
                notification["success"]({
                    message: response,
                });
                setReloadSubjects(true);
            })
            .catch((err) => {
                notification["error"]({
                    message: err,
                });
            });
    };

    const showDeleteConfirm = () => {
        const accesToken = getAccesToken();

        confirm({
            title: "Eliminando asignatura",
            content: `¿Estas seguro que quieres eliminar a ${subject.academic_activity}?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
                deleteSubject(accesToken, subject._id)
                    .then((response) => {
                        console.log(subject._id);
                        notification["success"]({
                            message: response,
                        });
                        console.log(subject._id);
                        setReloadSubjects(true);
                    })
                    .catch((err) => {
                        notification["error"]({
                            message: err,
                        });
                    });
            },
        });
    };
    return (
        <List.Item
            actions={[
                <Button type="primary" onClick={activateSubjectF}>
                    <UserSwitchOutlined />
                </Button>,
                <Button type="danger" onClick={showDeleteConfirm}>
                    <UserDeleteOutlined />
                </Button>,
            ]}
        >
            <List.Item.Meta
                title={`
                  ${subject.academic_activity ? subject.academic_activity : "..."} 
              `}
                description={subject.activity_code}
            />
        </List.Item>
    );
}