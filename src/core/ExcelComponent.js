/* eslint-disable require-jsdoc */
import { DomListener } from './DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.unsubscribers = [];

    this.prepare();
  }
  //Настраиваем компонент до init
  prepare() {}
  //Возвращает шаблон компонента
  toHTML() {
    return '';
  }
  //Уведомляем случшателей о событии
  $dispatch(event, ...args) {
    this.emitter.dispatch(event, ...args);
  }
  //Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }
  //Инициализация компонента
  //Добавление слушателей
  init() {
    this.initDOMListeners();
  }
  //Удаление компонента
  // Чистим слушатели
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub) => unsub());
  }
}
