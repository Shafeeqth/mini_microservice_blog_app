import axios from "axios";
import { useState } from "react";

type Props = {
  postId: string;
};

const CommentCreate = ({ postId }: Props) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios.post( `http://posts.com/posts/${postId}/comments`, {
      postId,
      content
    });

    setContent("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
