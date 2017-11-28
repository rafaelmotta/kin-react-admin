import React from 'react'
import PropTypes from 'prop-types'

import {
  Modal,
  Button
} from 'react-bootstrap'

import styles from './styles.css'

class RemoveButton extends React.Component {

  static propTypes = {
    onClick: PropTypes.func,
    iconRemove: PropTypes.string,
    iconCancelRemove: PropTypes.string,
    isRemoved: PropTypes.bool,
    confirmationTitle: PropTypes.string,
    confirmationDescription: PropTypes.string,
  }

  static defaultProps = {
    iconRemove: 'trash',
    iconCancelRemove: 'check',
    isRemoved: false,
    confirmationTitle: 'Atenção',
    confirmationDescription: 'Você tem certeza que deseja continuar?'
  }

  state = {
    showModal: false
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  handleOnRemove() {
    this.toggleModal()
  }

  handleRemoveConfirm() {
    this.toggleModal()
    this.props.onSubmit()
  }

  render () {
    const icon = `fa fa-${ this.props.isRemoved ? this.props.iconCancelRemove : this.props.iconRemove }`
    const buttonClass = this.props.isRemoved ? 'btn btn-xs btn-success' : 'btn btn-xs btn-danger'

    return(
      <div className="remove-button-container">
        <button className={buttonClass} onClick={this.handleOnRemove.bind(this)}>
          <i className={icon} />
        </button>
        <Modal show={this.state.showModal} onHide={this.toggleModal.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>
              {this.props.confirmationTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.confirmationDescription}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-primary" onClick={this.handleRemoveConfirm.bind(this)}>
              Confirmar
            </Button>
            <Button onClick={this.toggleModal.bind(this)}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default RemoveButton
