import {basePath, apiVersion} from "./config"

export function getSubjects(token) {
    const url = `${basePath}/${apiVersion}/subjects`
    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
    };
    return fetch(url, params)
        .then((response) =>{
            return response.json()
        })
        .then((result) =>{
            return result
        })
        .catch((err) =>{
            return err.message
        })
}

export function getActiveSubjects(token, status) {
    const url = `${basePath}/${apiVersion}/active-subjects?active=${status}`
    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    }
    return fetch(url, params)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            return result
        })
        .catch((err) => {
            return err.message
        })
}

export function getByPiaaVersion(token, piaa) {
    const url = `${basePath}/${apiVersion}/piaa-version?piaa_version=${piaa}`
    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    }
    return fetch(url, params)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            return result
        })
        .catch((err) => {
            return err.message
        })
}

export function activateSubject(token, subjectId, status) {
    const url = `${basePath}/${apiVersion}/activatesubject/${subjectId}`

    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify({
            active: status
        })
    };

    return fetch(url, params)
        .then(response => {
            return response.json()
        })
        .then(result => {
            return result.message
        })
        .catch(err => {
            return err.message
        })
}

export function updateSubject(token, subject, subjectId) {
    const url = `${basePath}/${apiVersion}/updatesubject/${subjectId}`;

    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify(subject)
    };

    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err.message;
        });
}

export function deleteSubject(token, subjectId) {
    const url = `${basePath}/${apiVersion}/deletesubject/${subjectId}`

    const params = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
    };
    return fetch(url, params)
        .then((response) =>{
            return response.json()
        })
        .then((result) =>{
            return result
        })
        .catch((err) =>{
            return err.message
        })
}

export function registerSubject(token, data){
    const url = `${basePath}/${apiVersion}/registersubject`

    const  params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify(data)
    }
    return fetch(url, params)
        .then(response =>{
            return response.json()
        })
        .then(result =>{
            return result.message
        })
        .catch(err =>{
            return err.message
        });
}