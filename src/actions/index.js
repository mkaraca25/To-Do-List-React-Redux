export const Add="Add";
export const Clear="Clear";
export const Toggle="Toggle";

export const addList=text=>{
    return {type:Add,payload:text}
}
export const Completed =id=>{
    return {type:Toggle,payload:id}
}

export const ClearAll =id=>{
    return {type:Clear,payload:id}
}
