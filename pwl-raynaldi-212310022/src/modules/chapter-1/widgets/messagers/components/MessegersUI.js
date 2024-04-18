import React, { useState, useRef, useEffect } from "react";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../../../chapter-1/widgets/messagers/components/ButtonUI";
import ChatBody from "../../../../chapter-1/widgets/messagers/components/ChatBody";

export default function MessengersUI() {
  const chatArr = [
    { id: 1, message: "Hi", from: "Febry", date: "2024-02-22 10:30:00" },
    { id: 2, message: "Iya", from: "Isnan", date: "2024-02-22 10:35:00" },
    {
      id: 3,
      message: "Apakah itu Micro-Frontend ?",
      from: "Febry",
      date: "2024-02-22 10:50:00",
    },
    { id: 4, message: "Kaga tau", from: "Isnan", date: "2024-02-22 10:52:00" },
    { id: 5, message: "Apaan dah", from: "Isnan", date: "2024-02-22 10:52:00" },
    {
      id: 6,
      message:
        "Arsitektur pada bagian FrontEnd aplikasi yang berpusat pada independensi suatu fitur dengan fitur lainnya.",
      from: "Febry",
      date: "2024-02-22 11:00:00",
    },
    { id: 7, message: "Bijiiii", from: "Isnan", date: "2024-02-22 12:12:00" },
  ];

  const [myChat, setMyChat] = useState(chatArr);
  const [writeChat, setWriteChat] = useState("");
  const endOfMessagesRef = useRef(null);
  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [myChat]);

  useEffect(() => {
    // Lakukan sesuatu di sini jika perlu menggunakan efek samping
    // Contoh: Lakukan sesuatu ketika myChat berubah
  }, [myChat]); // Tambahkan dependensi yang dibutuhkan jika ada

  const StylesMessenger = {
    chatBox: {
      minHeight: "200px",
      maxHeight: "45vh",
      overflowY: "auto",
    },
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      id: myChat.length + 1, // Atau Anda dapat menggunakan logika unik untuk menghasilkan ID baru
      message: writeChat,
      from: "You", // Atur sumber pesan sesuai kebutuhan Anda
      date: new Date().toISOString(), // Atur tanggal pesan sesuai dengan tanggal saat ini
    };
    setMyChat([...myChat, newMessage]); // Menambahkan pesan baru ke dalam state myChat
    setWriteChat(""); // Mengatur ulang nilai input pesan menjadi string kosong
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title align-items-start flex-column">
          <span
            className="fw-bold mb-2 text-gray-900"
            style={{ color: "#306754" }}
          >
            Chats
          </span>
        </h3>
        <div className="card-toolbar">
          <ButtonSecondary
            items={{
              title: "Create new chat",
              btn_class: "btn-icon btn-clear",
            }}
          >
            <i className="bi bi-pencil-square"></i>
          </ButtonSecondary>
        </div>
      </div>
      <div className="card-body p-0">
        <div
          className="chat-message px-2 bg-light-primary"
          style={StylesMessenger.chatBox}
        >
          <ChatBody data={myChat} />
          <div ref={endOfMessagesRef} />
        </div>
        <div className="chat-send bg-light p-3">
          <form onSubmit={handleSendMessage} autoComplete="off">
            <div className="d-flex justify-content-between align-items-center">
              <input
                type="text"
                className="form-control me-2"
                autoFocus={true}
                value={writeChat}
                onChange={(e) => setWriteChat(e.target.value)}
              />
              <ButtonPrimary
                items={{
                  title: "Send",
                  btn_class: "btn-icon btn-success",
                  type: "submit",
                }}
              >
                <i className="bi bi-send"></i>
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
