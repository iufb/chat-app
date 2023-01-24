import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Conversation, CreateNewConversationParams } from "../../utils/types";
import {
  getConversationMessages,
  getConversations,
  postNewConversation,
} from "../../utils/api";

export interface ConversationState {
  conversations: Map<number, Conversation>;
}
const initialState: ConversationState = { conversations: new Map() };
//extra reducers
export const fetchConversationsThunk = createAsyncThunk(
  "conversations/fetchConversationsThunk",
  async () => {
    return getConversations();
  }
);
export const fetchMessagesThunk = createAsyncThunk(
  "conversations/fetchMessagesThunk",
  async (id: number) => {
    return getConversationMessages(id);
  }
);
export const addConversationThunk = createAsyncThunk(
  "conversations/addConversationThunk ",
  async (data: CreateNewConversationParams) => {
    return postNewConversation(data);
  }
);
//slice
export const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    addConversations: (
      state: ConversationState,
      action: PayloadAction<Conversation>
    ) => {
      state.conversations.set(action.payload.id, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConversationsThunk.fulfilled, (state, { payload }) => {
        payload.data.forEach((conversation) => {
          state.conversations.set(conversation.id, conversation);
        });
      })
      .addCase(addConversationThunk.fulfilled, () => console.log("Success"))
      .addCase(fetchMessagesThunk.fulfilled, (state, { payload }) => {
        const { id, messages } = payload.data;
        console.log(payload.data)
        const conversation = state.conversations.get(id);
        if (conversation) {
          conversation.messages = messages;
          state.conversations.set(id, conversation);
        }
      });
  },
});

// Action creators are generated for each case reducer function
export const { addConversations } = conversationsSlice.actions;

export default conversationsSlice.reducer;
