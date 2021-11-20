import {addPostAC, deletePost, profileReducer} from "./profileReducer";

const state = {
    postsData: [
        {id: '1', message: 'hi what\'s new', likesAmount: '6'},
        {id: '2', message: 'Hello i\'m an alien from planet of ww1', likesAmount: '15'},
        {id: '3', message: 'How is your going', likesAmount: '2'},
        {id: '4', message: 'What have you seen', likesAmount: '1'},
        {id: '5', message: 'Hello guys', likesAmount: '0'},
        {id: '6', message: 'Hello guys', likesAmount: '3'},
    ],
    profile: null,
    status: '',
}

test('new post should be added', () => {
    const action = addPostAC('say Hello to everyone')

    const newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(7)
    expect(newState.postsData[0].message).toBe('say Hello to everyone')
})

test('the actual length of the data array should be reduced by one element', () => {

    const action = deletePost('1')

    const newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(5)

})