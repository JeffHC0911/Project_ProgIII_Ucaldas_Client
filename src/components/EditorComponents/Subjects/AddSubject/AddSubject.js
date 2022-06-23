import React, { useState } from "react";
import { Form, Input, Button, Row, Col, notification } from "antd"
import { FileAddOutlined } from "@ant-design/icons"
import { registerSubject } from "../../../../api/subject"
import { getAccesToken } from "../../../../api/auth"
import "./AddSubject.scss"

export default function EditSubject(props) {
    const { setIsVisibleModal, setReloadSubjects } = props
    const [subjectData, setSubjectData] = useState({})

    const addSubject = (event) => {
        event.preventDefault()

        if (!subjectData.departament || !subjectData.academic_activity || !subjectData.activity_code || !subjectData.number_credits || !subjectData.piaa_version ||
            !subjectData.theory_hours || !subjectData.offsite_hours || !subjectData.hoursnon_attendace_reprovals ||
            !subjectData.last_chance || !subjectData.duration_semester || !subjectData.practical_hours || !subjectData.presential_teacher_hours ||
            !subjectData.maximum_quotas || !subjectData.passing_score || !subjectData.weeks_duration) {
            notification["error"]({
                message: "Todos los campos son obligatorios"
            });
        } else {
            const accesToken = getAccesToken()

            registerSubject(accesToken, subjectData)
                .then((response) => {
                    notification["success"]({
                        message: response,
                    });
                    setIsVisibleModal(false)
                    setReloadSubjects(true)
                    setSubjectData({})
                })
                .catch((err) => {
                    notification["error"]({
                        message: err,
                    })
                })
        }
    };

    return (
        <div className="add-subject-form">
            <AddForm
                subjectData={subjectData}
                setSubjectData={setSubjectData}
                addSubject={addSubject}
            />
        </div>
    )
}

const AddForm = (props) => {
    const { subjectData, setSubjectData, addSubject } = props

    return (
        <Form className="form-add">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FileAddOutlined />}
                            placeholder="Departamento"
                            value={subjectData.departament}
                            onChange={(e) => setSubjectData({ ...subjectData, departament: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FileAddOutlined />}
                            placeholder="Asignatura"
                            value={subjectData.academic_activity}
                            onChange={(e) => setSubjectData({ ...subjectData, academic_activity: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FileAddOutlined />}
                            placeholder="Código"
                            value={subjectData.activity_code}
                            onChange={(e) => setSubjectData({ ...subjectData, activity_code: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FileAddOutlined />}
                            placeholder="Créditos"
                            value={subjectData.number_credits}
                            onChange={(e) => setSubjectData({ ...subjectData, number_credits: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FileAddOutlined />}
                            placeholder="Versión PIAA"
                            value={subjectData.piaa_version}
                            onChange={(e) => setSubjectData({ ...subjectData, piaa_version: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FileAddOutlined />}
                            placeholder="Horas teóricas"
                            value={subjectData.theory_hours}
                            onChange={(e) => setSubjectData({ ...subjectData, theory_hours: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FileAddOutlined />}
                            placeholder="Horas totales"
                            value={subjectData.offsite_hours}
                            onChange={(e) => setSubjectData({ ...subjectData, offsite_hours: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FileAddOutlined />}
                            placeholder="Horas para reprobar"
                            value={subjectData.hoursnon_attendace_reprovals}
                            onChange={(e) => setSubjectData({ ...subjectData, hoursnon_attendace_reprovals: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FileAddOutlined />}
                            placeholder="¿Habilitable?"
                            value={subjectData.last_chance}
                            onChange={(e) => setSubjectData({ ...subjectData, last_chance: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FileAddOutlined />}
                            placeholder="Duración en semestres"
                            value={subjectData.duration_semester}
                            onChange={(e) => setSubjectData({ ...subjectData, duration_semester: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FileAddOutlined />}
                            placeholder="Horas prácticas"
                            value={subjectData.practical_hours}
                            onChange={(e) => setSubjectData({ ...subjectData, practical_hours: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FileAddOutlined />}
                            placeholder="Horas presenciales (docente)"
                            value={subjectData.presential_teacher_hours}
                            onChange={(e) => setSubjectData({ ...subjectData, presential_teacher_hours: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FileAddOutlined />}
                            placeholder="Cantidad de cupos"
                            value={subjectData.maximum_quotas}
                            onChange={(e) => setSubjectData({ ...subjectData, maximum_quotas: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FileAddOutlined />}
                            placeholder="Nota mínima"
                            value={subjectData.passing_score}
                            onChange={(e) => setSubjectData({ ...subjectData, passing_score: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FileAddOutlined />}
                            placeholder="Semanas de duración"
                            value={subjectData.weeks_duration}
                            onChange={(e) => setSubjectData({ ...subjectData, weeks_duration: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-submit"
                    onClick={addSubject}
                >Registrar asignatura</Button>
            </Form.Item>
        </Form>
    )
}
