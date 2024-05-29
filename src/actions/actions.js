export const submitGroupTaskRequest = (payload) => {
    return {
        type: "SUBMIT_GROUP_TASK_REQUEST",
        payload,
    };
};

export const updateGroupTaskRequest = (payload) => {
    return {
        type: "UPDATE_GROUP_TASK_REQUEST",
        payload
    }
}
