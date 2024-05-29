import initialState from "@/data/data";
import {
    SUBMIT_GROUP_TASK_FAILURE,
    SUBMIT_GROUP_TASK_REQUEST,
    SUBMIT_GROUP_TASK_SUCCESS, UPDATE_GROUP_TASK_FAILURE,
    UPDATE_GROUP_TASK_REQUEST, UPDATE_GROUP_TASK_SUCCESS
} from "@/types/types";

export const groupTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_GROUP_TASK_REQUEST:
            return { ...state, loading: true };
        case SUBMIT_GROUP_TASK_SUCCESS: {
            const groupTasks = state.groupTasks.map(item =>
                item.id === action.payload.id ? action.payload : item
            );

            const isExistingTask = state.groupTasks.some(item => item.id === action.payload.id);
            const updatedGroupTasks = isExistingTask ? groupTasks : [ ...groupTasks, action.payload ];

            return { ...state, loading: false, groupTasks: updatedGroupTasks };
        }
        case SUBMIT_GROUP_TASK_FAILURE:
            return { ...state, loading: false, error: action.payload };
        //     ------------- update ------------
        case UPDATE_GROUP_TASK_REQUEST:
            return { ...state, loading: true };
        case UPDATE_GROUP_TASK_SUCCESS:
            return { ...state, loading: false, groupTasks: action.payload };
        case UPDATE_GROUP_TASK_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
