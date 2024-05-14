"use client";
import { FormEvent, useState } from "react";
const AddBook = ({ refreshBooks }: { refreshBooks: () => void }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookLink, setNewBookLink] = useState("");
  const [newBookImage, setNewBookImage] = useState("");

  const handleSubmitNewBook = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`/api/books/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: newBookTitle,
        link: " https://www.amazon.com/dp/B0979MGJ5J",
        img: " https://via.placeholder.com/600/92c952 ",
      }),
    });

    if (res) {
      setNewBookTitle("");
      setModalOpen(false);
      refreshBooks();
    }
  };

  return (
    <div>
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add Book
      </button>
      <dialog
        id="my_modal_3"
        className={`modal ${modalOpen ? "modal-open" : ""}`}
      >
        <form
          method="dialog"
          className="modal-box"
          onSubmit={handleSubmitNewBook}
        >
          <button
            onClick={() => setModalOpen(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Add New Book</h3>
          <input
            type="text"
            placeholder="Enter New Book Title"
            className="input input-bordered w-full max-w-xs"
            value={newBookTitle}
            onChange={(e) => setNewBookTitle(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Add Book {""}
          </button>
        </form>
      </dialog>
    </div>
  );
};
export default AddBook;
