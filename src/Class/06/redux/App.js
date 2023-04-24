import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./itemSlice";

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  const handleAddItem = () => {
    dispatch(addItem("새로운 아이템"));
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div>
      <button onClick={handleAddItem}>아이템 추가</button>
      {items.map((item, index) => (
        <div key={index}>
          {item}
          <button onClick={() => handleRemoveItem(index)}>Remove Item</button>
        </div>
      ))}
    </div>
  );
};

export default App;