import React from "react";

export default function World(props) {
    return <span style={{ fontWeight: "bold" }}>
        {props.name}!</span>;
}
//props 에서 헬로에서 월드라는 거를 가져다가 네임으로 명명했으니 여기에서 네임 받아온 것을 출력함
