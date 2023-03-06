import type { Component } from './type';
import MainTemplate from './components/MainTemplate';
import Modal from './components/Modal';

type AppState = {
  modalHide: boolean;
};

type AppProps = {
  $parent: HTMLElement;
};

class App implements Component<AppState> {
  $component: HTMLElement;
  state: AppState;

  constructor({ $parent }: AppProps) {
    this.$component = document.createElement('div');
    this.$component.classList.add('app');

    this.state = {
      modalHide: true,
    };

    $parent.append(this.$component);
  }

  setState(newState: AppState) {
    this.state = newState;
    this.render();
  }

  render() {
    const { modalHide } = this.state;
    this.$component.innerHTML = ``;

    new MainTemplate({
      $parent: this.$component,
      modalHide,
      toggleModal: this.toggleModal.bind(this),
    }).render();

    if (!modalHide) {
      new Modal({ $parent: this.$component, toggleModal: this.toggleModal.bind(this) }).render();
    }
  }

  toggleModal() {
    const { modalHide } = this.state;

    this.setState({
      ...this.state,
      modalHide: !modalHide,
    });
  }
}

export default App;
