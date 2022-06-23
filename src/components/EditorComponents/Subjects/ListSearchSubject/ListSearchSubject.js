import React, { useState, useEffect } from 'react'
import { getSubjects } from "../../../../api/subject"
import { getAccesToken } from "../../../../api/auth"
import {
    Input,
    List,
    Button,
    Modal as ModalAntd,
    notification,
} from "antd";
import {
    EditOutlined,
    UserDeleteOutlined,
    FileAddOutlined
} from "@ant-design/icons";
import { deleteSubject, getByPiaaVersion } from "../../../../api/subject";
import EditSubjectForm from "../EditSubject";
import AddSubjectForm from "../AddSubject";
import Modal from "../../../Modal";
import "./ListSearchSubject.scss"

const { confirm } = ModalAntd;

const SearchComponent = () => {
    //setear los hooks useState
    const [subjects, setSubjects] = useState([])
    const [search, setSearch] = useState("")
    const [realoadSubjects, setReloadSubjects] = useState(false);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    //función para traer los datos de la API
    const accesToken = getAccesToken()

    const showData = async () => {
        getSubjects(accesToken).then((response) => {
            setSubjects(response.subjects);
        });
        setReloadSubjects(false)
    }

    const getPiaa = async () => {
        getByPiaaVersion(accesToken, search).then((response) => {
            setSubjects(response.subjects);
            console.log(response.subjects)
        });
        setReloadSubjects(false)
    }
    //función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value)
    }

    //metodo de filtrado 2   
    const results = !search ? subjects : subjects.filter(dato => dato.piaa_version.includes(search))

    useEffect(() => {
        showData()
    })

    const editSubject = (subject) => {
        setIsVisibleModal(true);
        setModalTitle(
            `Editar ${subject.academic_activity ? subject.academic_activity : "..."}`
        );
        setModalContent(
            <EditSubjectForm
                subject={subject}
                setIsVisibleModal={setIsVisibleModal}
                setReloadSubjects={setReloadSubjects}
            />
        );
    };

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

    const showDeleteConfirm = (subject) => {
        const accesToken = getAccesToken();

        confirm({
            title: "Eliminando usuario",
            content: `¿Estas seguro que quieres eliminar a ${subject.academic_activity}?`,
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

    //renderizamos la vista
    return (
        <div className='list-subjects__header-switch'>
            <List.Item
                actions={[
                    <Button type="primary" onClick={addSubjectModal}>
                        <FileAddOutlined />
                    </Button>,
                ]}
            >
                <List.Item.Meta
                    title={
                        <span>
                            {"Asignaturas Activas 2022"}
                        </span>
                    }
                ></List.Item.Meta>
            </List.Item>
            <Input value={search} onChange={searcher} type="text" placeholder='PIAA Version' className='form-control' />
            <table className='table table-striped table-hover mt-5 shadow-lg'>
                <thead>
                    <tr className='bg-curso text-white'>
                        <th>DEPARTAMENT</th>
                        <th>ACTIVIDAD</th>
                        <th>PIAA</th>
                        <th>HABILITABLE</th>
                        <th>EDITAR</th>
                        <th>ELIMINAR</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((subject) => (
                        <tr key={subject.id}>
                            <td>{subject.departament}</td>
                            <td>{subject.academic_activity}</td>
                            <td>{subject.piaa_version}</td>
                            <td>{subject.last_chance === true ? "Sí" : "No"}</td>
                            <td>
                                <Button type="primary" onClick={() => editSubject(subject)}>
                                    <EditOutlined />
                                </Button>
                            </td>
                            <td>
                                <Button type="danger" onClick={() => showDeleteConfirm(subject)}>
                                    <UserDeleteOutlined />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
            >
                {modalContent}
            </Modal>
        </div>
    )
}
export default SearchComponent