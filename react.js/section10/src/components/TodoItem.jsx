import './TodoItem.css';
import { memo } from 'react';

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    };
    
    const onClickDeleteButton = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
};

// 고차 컴포넌트 (HOC)
export default memo(TodoItem, (prevProps, nextProps)=>{
    // 현재 props와 과거 props를 직접 비교
    // 왜? 함수 같은 객체 타입은 얕은 비교로 무조건 다르다고 판단하기 때문
    // -> 반환값에 따라, Props가 바뀌었는지 안 바뀌었는지 판단
    // T -> Props 바뀌지 않음 -> 리렌더링 x
    // F -> Props 바뀜 -> 리렌더링 o

    if (prevProps.id !== nextProps.id) return false;
    if (prevProps.isDone !== nextProps.isDone) return false;
    if (prevProps.content !== nextProps.content) return false;
    if (prevProps.date !== nextProps.date) return false;

    return true;

}); // 콜백 함수 최적화