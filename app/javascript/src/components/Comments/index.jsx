import React from "react";

import Button from "components/Button";

const Comments = ({
  comments,
  loading,
  newComment,
  setNewComment,
  handleSubmit,
}) => (
  <>
    <form className="mb-16" onSubmit={handleSubmit}>
      <div className="sm:grid sm:grid-cols-1 sm:items-start sm:gap-1">
        <label
          className="text-nitro-gray-800 block text-sm
            font-medium sm:mt-px sm:pt-2"
        >
          Comment
        </label>
        <textarea
          placeholder="Ask a question or post an update"
          rows={3}
          value={newComment}
          className="border border-bb-border text-bb-gray-600 focus:ring-bb-purple focus:border-bb-purple block
            w-full flex-1 resize-none rounded-md
            p-2 shadow-sm sm:text-sm"
          onChange={e => setNewComment(e.target.value)}
        />
      </div>
      <Button buttonText="Comment" loading={loading} type="submit" />
    </form>
    {comments?.map((comment, index) => (
      <div
        key={comment.id}
        className="border border-bb-border text-md rounded my-2 flex
          justify-between px-8 py-3 leading-5"
      >
        <p className="text-bb-gray-600" key={index}>
          {comment.content}
        </p>
        <p className="text-bb-gray-600 text-opacity-50">
          {new Date(comment.created_at).toLocaleString()}
        </p>
      </div>
    ))}
  </>
);

export default Comments;
