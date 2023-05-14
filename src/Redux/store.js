// import createstore from 'redux'
import { applyMiddleware ,createStore ,combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { channelDetailsReducer } from './Reducers/ChannelReducer'
import { selectedVideoReducer } from './Reducers/Videoreducer'
import { authReducer } from './Reducers/AuthReducer'
import { commentListReducer } from './Reducers/CommentsReducer'
import { HomeVideoReducer } from './Reducers/Videoreducer'
import { relatedVideoReducer } from './Reducers/Videoreducer'
const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos:HomeVideoReducer,
    selectedVideo:selectedVideoReducer,
    channelDetails:channelDetailsReducer,
    commentList:commentListReducer,
    relatedVideos:relatedVideoReducer,
})

const store = createStore(rootReducer,{} ,composeWithDevTools(applyMiddleware(thunk)))
export default store;