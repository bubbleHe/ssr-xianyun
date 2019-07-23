// export const state = () => ({
//     abc: 123
// })

// 等同于return
// export const state = () => {
//     return {
//         abc: 123
//     }
// }

export const state = () =>{
    return{
        draftDox :[]
    }
}

export const mutations = {
    setDraftDox(state,data){
        state.draftDox.unshift(data)
    },
    deleteDraft(state,index){
        state.draftDox.splice(index,1)
    }
}