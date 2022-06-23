import React, { useState, useEffect } from "react";
import {
    Form,
    Input,
    Button,
    Row,
    Col,
    notification,
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import { updateSubject } from "../../../../api/subject";
import { getAccesToken } from "../../../../api/auth";

import "./EditSubject.scss";

export default function EditSubjectForm(props) {
    const { subject, setIsVisibleModal, setReloadSubjects } = props;
    const [subjectData, setSubjectData] = useState({});

    useEffect(() => {
        setSubjectData({
            departament: subject.departament,
            academic_activity: subject.academic_activity,
            activity_code: subject.activity_code,
            number_credits: subject.number_credits,
            piaa_version: subject.piaa_version,
            theory_hours: subject.theory_hours,
            offsite_hours: subject.offsite_hours,
            hoursnon_attendace_reprovals: subject.hoursnon_attendace_reprovals,
            last_chance: subject.last_chance,
            duration_semester: subject.duration_semester,
            practical_hours: subject.practical_hours,
            presential_teacher_hours: subject.presential_teacher_hours,
            maximum_quotas: subject.maximum_quotas,
            passing_score: subject.passing_score,
            weeks_duration: subject.weeks_duration
        });
    }, [subject]);

    const subjectUpdate = () => {
        const token = getAccesToken();
        let subjectUpdate = subjectData;

        updateSubject(token, subjectUpdate, subject._id).then(result => {
            notification["success"]({
                message: result.message
            });
            setIsVisibleModal(false);
            setReloadSubjects(true);
        });
    };

    return (
        <div className="edit-subject-form">
            <EditForm
                subjectData={subjectData}
                setSubjectData={setSubjectData}
                subjectUpdate={subjectUpdate}
            />
        </div>
    );
}

function EditForm(props) {
    const { subjectData, setSubjectData, subjectUpdate } = props;

    return (
        <Form className="form-edit" onFinish={subjectUpdate}>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item> 
                        Departamento
                        <Input
                            prefix={<EditOutlined />}
                            placeholder="Departamento"
                            value={subjectData.departament}
                            onChange={e => setSubjectData({ ...subjectData, departament: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        Asignatura
                        <Input
                            prefix={<EditOutlined />}
                            placeholder="Asignatura"
                            value={subjectData.academic_activity}
                            onChange={e => setSubjectData({ ...subjectData, academic_activity: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        Código
                        <Input
                            prefix={<EditOutlined />}
                            placeholder="Código"
                            value={subjectData.activity_code}
                            onChange={e => setSubjectData({ ...subjectData, activity_code: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        Créditos
                        <Input
                            prefix={<EditOutlined />}
                            placeholder="Créditos"
                            value={subjectData.number_credits}
                            onChange={e => setSubjectData({ ...subjectData, number_credits: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        PIAA
                        <Input
                            prefix={<EditOutlined />}
                            placeholder="Versión PIAA"
                            value={subjectData.piaa_version}
                            onChange={e => setSubjectData({ ...subjectData, piaa_version: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        Horas T.
                        <Input
                            prefix={<EditOutlined />}
                            placeholder="Horas teóricas"
                            value={subjectData.theory_hours}
                            onChange={e => setSubjectData({ ...subjectData, theory_hours: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        Horas Tot.
                        <Input
                            prefix={<EditOutlined />}
                            placeholder="Horas totales"
                            value={subjectData.offsite_hours}
                            onChange={e => setSubjectData({ ...subjectData, offsite_hours: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        Horas Rep
                        <Input
                            prefix={<EditOutlined />}
                            placeholder="Horas para reprobar"
                            value={subjectData.hoursnon_attendace_reprovals}
                            onChange={e => setSubjectData({ ...subjectData, hoursnon_attendace_reprovals: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        ¿Habilitable?
                        <Input
                            prefix={<EditOutlined />}
                            placeholder="¿Habilitable?"
                            value={subjectData.last_chance}
                            onChange={e => setSubjectData({ ...subjectData, last_chance: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        Semestres
                        <Input
                            prefix={<EditOutlined />}
                            placeholder="Duración en semestres"
                            value={subjectData.duration_semester}
                            onChange={e => setSubjectData({ ...subjectData, duration_semester: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        Horas Prac.
                        <Input
                            prefix={<EditOutlined />}
                            placeholder="Horas prácticas"
                            value={subjectData.practical_hours}
                            onChange={e => setSubjectData({ ...subjectData, practical_hours: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        Horas Presc.
                        <Input
                            prefix={<EditOutlined />}
                            placeholder="Horas presenciales (docente)"
                            value={subjectData.presential_teacher_hours}
                            onChange={e => setSubjectData({ ...subjectData, presential_teacher_hours: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        Cupos
                        <Input
                            prefix={<EditOutlined />}
                            placeholder="Cantidad de cupos"
                            value={subjectData.maximum_quotas}
                            onChange={e => setSubjectData({ ...subjectData, maximum_quotas: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        Nota Min.
                        <Input
                            prefix={<EditOutlined />}
                            placeholder="Nota mínima"
                            value={subjectData.passing_score}
                            onChange={e => setSubjectData({ ...subjectData, passing_score: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        Semanas
                        <Input
                            prefix={<EditOutlined />}
                            placeholder="Semanas de duración"
                            value={subjectData.weeks_duration}
                            onChange={e => setSubjectData({ ...subjectData, weeks_duration: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Actualizar Asignatura
                </Button>
            </Form.Item>
        </Form>
    );
}