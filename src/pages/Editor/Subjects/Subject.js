import React, { useState, useEffect } from "react";
import "./Subject.scss";
import {getAccesToken} from "../../../api/auth"
import {getActiveSubjects, getSubjects} from "../../../api/subject"
import ListSubjects from "../../../components/EditorComponents/Subjects/ListSubjects/ListSubject";
import SearchComponent from "../../../components/EditorComponents/Subjects/ListSearchSubject/ListSearchSubject";

export default function Subjects() {
    const [subjectsActive, setSubjectsActive] = useState([]);
    const [subjectsInactive, setSubjectsInactive] = useState([]);
    const [reloadSubjects, setReloadSubjects] = useState(false);
    const token = getAccesToken()

    useEffect(() => {
        /* Validamos el active que es el segundo param
        si es true carga un object con usuarios activos */
        // getActiveSubjects(token, true).then((response) => {
        //     setSubjectsActive(response.subjects);
        // });
        // /* Validamos el active que es el segundo param
        // si es false carga un object con usuarios inactivos */
        // getActiveSubjects(token, false).then((response) => {
        //     setSubjectsInactive(response.subjects);
        // });
        getSubjects(token).then((response) => {
            setSubjectsInactive(response.subjects);
        });
        setReloadSubjects(false);
    }, [token, reloadSubjects]);

    return (
        <div>
            {/* <ListSubjects
                subjectsActive={subjectsActive}
                subjectsInactive={subjectsInactive}
                setReloadSubjects={setReloadSubjects}
            /> */}
            <SearchComponent
            />
        </div>
    );
}