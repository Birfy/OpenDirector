import r from "dw4";
import a from "Rb";
export class U {
  get runningTasks() {
    return this.tasks.filter(
      (e) =>
        e.task.model.statusModel.recordStatus === a.DMLGenRecordStatus.Loading,
    );
  }
  add(task, disposes) {
    this.tasks.push({
      task,
      disposes,
    });
  }
  find(e) {
    return this.tasks.find((t) => t.task.model.idModel.submitId === e);
  }
  remove(e) {
    const t = this.find(e);
    if (t) {
      this.tasks = this.tasks.filter(
        (t) => t.task.model.idModel.submitId !== e,
      );
    }
    return t;
  }
  removeAll() {
    this.tasks = [];
  }
  constructor() {
    this.tasks = [];
    r.l_(this);
  }
}
