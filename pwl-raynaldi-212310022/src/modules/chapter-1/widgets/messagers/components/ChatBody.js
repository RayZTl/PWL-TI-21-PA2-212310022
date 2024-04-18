import React from "react";
import moment from "moment";

export default function ChatBody({ data }) {
    const styleChatItems = {
        chatBubleItems: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#CFECEC"
        },
        chatBubleSender: {
            textAlign: "right",
            backgroundColor: "#306754",
            alignSelf: "flex-end",
            maxWidth: "60%"
        },
        chatBubleReceiver: {
            backgroundColor: "#3EB489",
            alignSelf: "flex-start",
            maxWidth: "60%"
        },
    };

    // Urutkan data berdasarkan tanggal rilis chat
    const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
    let nowDisplayed = false;
    let lastDateDisplayed = null;

    return (
        <div className="chat-items p-3">
            {sortedData.map((v, index) => {
                const displayDate = !lastDateDisplayed || moment(v.date).format("YYYY-MM-DD") !== lastDateDisplayed;
                lastDateDisplayed = moment(v.date).format("YYYY-MM-DD");

                 let showNow = false; // Variabel untuk menandai apakah teks "now" harus ditampilkan
                if (!nowDisplayed && moment(v.date).isSame(new Date(), 'day')) {
                    nowDisplayed = true;
                    showNow = true;
                }
                return (
                    <div className="chat-item" style={styleChatItems.chatBubleItems} key={index}>
                        {displayDate && (
                            <div className="chat-date-container" style={{ width: "150px", margin: "auto", textAlign: "center", backgroundColor: "#FFFFFF", borderRadius: "10px", padding: "5px", }}>
                                <span className="chat-date" style={{ fontSize: "13px", color: "grey", fontStyle:"italic", fontFamily:"Open Sans"}}>
                                    {showNow ? "Today" : moment(v.date).format("DD - MMMM - YYYY")}
                                </span>
                            </div>
                        )}
                        <div className="chat text-white rounded my-2 p-2" style={(index % 2 === 0 ? styleChatItems.chatBubleReceiver : styleChatItems.chatBubleSender)}>
                            <span className="me-3">{v.message}</span>
                            <span className="chat-date" style={{ fontSize: "11px" }}>
                                {moment(v.date).format("HH:mm")}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}