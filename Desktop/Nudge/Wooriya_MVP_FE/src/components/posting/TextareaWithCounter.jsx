import React from "react";

const TextareaWithCounter = ({ text, setText, maxLength = 1000 }) => {
    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <label htmlFor="textArea">혜택 제안 상세 설명</label>
                <div style={{ 
                    color: '#267DFF',
                    fontSize: '0.7vw',
                    fontWeight: '700'
                    }}>
                    {text.length}/{maxLength}</div>
            </div>
            <textarea
                id="textArea"
                value={text}
                onChange={handleChange}
                maxLength={maxLength} // 입력 가능한 최대 글자수 제한
                placeholder="원하시는 혜택에 대한 상세 설명을 작성해주세요."
                style={{ 
                    width: '44vw', 
                    height: '8.5vw',
                    borderRadius: '0.5vw',
                    border: '0.1vw solid #E5E8EB',
                    fontSize: '0.72vw',
                    fontWeight: '100',
                    padding: '0.73vw',
                    marginTop: '1vw',
                    resize: 'none',
                }} // 스타일은 자유롭게 조정 가능
            />
        </div>
    );
};

export default TextareaWithCounter;
