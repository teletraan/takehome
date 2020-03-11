import React from "react";

export function Help() {
  return (
    <details open>
      <summary>JSON 编辑器</summary>
      <p>
        试着开发一个简单的 JSON 编辑器，具备如下功能：
        <ol>
          <li>可以解析用户输入的 JSON 文本</li>
          <li>友好地展示解析后的 JSON 数据</li>
          <li>可以让用户编辑解析后的数据</li>
          <li>编辑能力需尽可能完善，包括但不限于改变类型、增减字段等</li>
          <li>随着用户编辑适时更新 JSON 文本，便于用户取用</li>
          <li>根据你的理解，适当增加提升用户体验的功能并使界面简洁美观</li>
        </ol>
      </p>
    </details>
  );
}
