import React, { Component } from 'react';

export default class tvtListTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingIndex: null,
      newTask: {
        tvt_taskId: '',
        tvt_taskName: '',
        tvt_level: '',
      },import React, { Component } from 'react';

      class tvtProductlist extends Component {
        tvtHandleEdit = (product) => {
          console.log("Edit:", product);
          this.props.tvcOnEdit(product);
        }
      
        render() {
          const { renderProducts } = this.props;
          console.log("Product:", renderProducts);
          
          const elementProduct = renderProducts.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.active ? 'Hiển thị' : 'Ẩn'}</td>
                <td>
                  <button
                    className='btn btn-success mx-1'
                    name='tvtBtnEdit'
                    onClick={() => this.tvtHandleEdit(item)}
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button
                    className='btn btn-danger mx-1'
                    name='tvtBtnDelete'
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          });
      
          return (
            <div>
              <h2>Danh Sách Sản Phẩm</h2>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Active</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {elementProduct}
                </tbody>
              </table>
            </div>
          );
        }
      }
      
      export default tvtProductlist;
    };
  }

  handleEdit = (index) => {
    this.setState({ editingIndex: index, newTask: { ...this.props.renderProducts[index] } });
  }

  handleSave = () => {
    let { renderProducts } = this.props;
    let { editingIndex, newTask } = this.state;

    // Validate the new task data
    if (!newTask.tvt_taskId || !newTask.tvt_taskName || !newTask.tvt_level) {
      alert('Please fill in all the fields.');
      return;
    }

    // Update the existing task
    renderProducts[editingIndex] = { ...newTask };
    this.setState({ editingIndex: null, newTask: { tvt_taskId: '', tvt_taskName: '', tvt_level: '' } });
    this.props.onUpdate(renderProducts);
  }

  handleCancel = () => {
    this.setState({ editingIndex: null, newTask: { tvt_taskId: '', tvt_taskName: '', tvt_level: '' } });
  }

  handleDelete = (index) => {
    let { renderProducts } = this.props;
    renderProducts.splice(index, 1);
    this.props.onUpdate(renderProducts);
  }

  handleInputChange = (e) => {
    this.setState({ newTask: { ...this.state.newTask, [e.target.name]: e.target.value } });
  }

  render() {
    let { renderProducts } = this.props;
    let { editingIndex, newTask } = this.state;

    let elementProduct = renderProducts.map((item, index) => {
      if (index === editingIndex) {
        return (
          <tr key={index}>
            <td><input type="text" name="tvt_taskId" value={newTask.tvt_taskId} onChange={this.handleInputChange} /></td>
            <td><input type="text" name="tvt_taskName" value={newTask.tvt_taskName} onChange={this.handleInputChange} /></td>
            <td><input type="text" name="tvt_level" value={newTask.tvt_level} onChange={this.handleInputChange} /></td>
            <td>
              <button onClick={this.handleSave}>Save</button>
              <button onClick={this.handleCancel}>Cancel</button>
            </td>
          </tr>
        );
      } else {
        return (
          <tr key={index}>
            <td>{item.tvt_taskId}</td>
            <td>{item.tvt_taskName}</td>
            <td>{item.tvt_level}</td>
            <td>
              <button onClick={() => this.handleEdit(index)}>Edit</button>
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </td>
          </tr>
        );
      }
    });

    return (
      <div>
        <h2>Danh sách lớp học</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>tvt_taskId</th>
              <th>tvt_taskName</th>
              <th>tvt_level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {elementProduct}
          </tbody>
        </table>
      </div>
      );
    }
  }