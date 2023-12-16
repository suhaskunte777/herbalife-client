export function setAuthenticated(state, value) {
    state.authenticated = value
    if (value) {
        localStorage.setItem("authenticated", "true")
    } else {
        localStorage.removeItem("authenticated")
    }
}
export function setUser(state, value) {
    state.user = value
}

export function setErrors(state, value) {
    state.errors = value
}

export function clearErrors(state, entity) {
    state.errors[entity] = [];
}

export function setInitialized(state, value) {
    state.initialized = value
}

export function setClients(state, value) {
    state.clients = value
}

export function setCurrentClient(state, value) {
    value['gender'] = state.genders.find(gender => gender.name === value.gender.replace(/^./, value.gender[0].toUpperCase()));
    state.currentClient = value;
}
