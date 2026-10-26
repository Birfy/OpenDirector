import { Icon } from "./Icon";

export function StudyNotes() {
  return (
    <details id="study-notes" className="study-notes">
      <summary>
        <span>
          <Icon name="code" size={16} />
          这份工程是怎样还原的？
        </span>
        <span>
          实现依据
          <Icon name="chevron" size={14} />
        </span>
      </summary>
      <div className="study-content">
        <p>
          这是一份可运行的学习重建。组件名称、TypeScript
          类型、配图和本地任务逻辑由本工程重新编写，不是恢复出的原始 TSX 工程。
        </p>
        <div className="evidence-grid">
          <div>
            <span className="evidence-tag observed">已观察</span>
            <h3>页面布局与资源分组</h3>
            <p>
              首页入口 <code>fP</code> 声明
              HomeCreate、侧栏与生成器资源；页面外观参考浏览器截图。
            </p>
          </div>
          <div>
            <span className="evidence-tag derived">代码推导</span>
            <h3>校验与中止语义</h3>
            <p>
              <code>TJ</code> 校验推荐卡片快照；<code>nT</code> 选择提交或调用{" "}
              <code>abortByUser</code>。边界校验见本项目的领域模块。
            </p>
          </div>
          <div>
            <span className="evidence-tag authored">重新编写</span>
            <h3>本地交互练习</h3>
            <p>
              React 状态、模拟任务、画布和 SVG
              插图为独立实现。没有原站后端、登录、模型推理或上传服务。
            </p>
          </div>
        </div>
        <p className="study-limits">
          未获得 source
          map，原始组件名、完整工程结构与服务端行为仍未知。源码溯源和验证范围见仓库文档。
        </p>
      </div>
    </details>
  );
}
