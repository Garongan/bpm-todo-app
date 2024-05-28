import initialState from "@/data/data";
import { SUBMIT_GROUP_TASK_FAILURE, SUBMIT_GROUP_TASK_REQUEST, SUBMIT_GROUP_TASK_SUCCESS } from "@/types/types";

export const groupTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_GROUP_TASK_REQUEST:
            return { ...state, loading: true };
        case SUBMIT_GROUP_TASK_SUCCESS:
            return { ...state, loading: false, groupTasks: [...state.groupTasks, action.payload] };
        case SUBMIT_GROUP_TASK_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
