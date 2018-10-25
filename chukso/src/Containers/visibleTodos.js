import { connect } from "react-redux";
import TodoList from '../Components/todoList';
import { toggleTodo } from '../Actions';

const mapStateToProps = (state) => ( {
    todosprops:state.todos
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);