export default ({ html, css }) => {
  const template = () => html`
    <div>
      <div class="ctx-sidebar-area">
        <div data-component="sidebar"></div>
      </div>
      <div class="ctx-view-area">
        <div data-component="routerView"></div>
      </div>
    </div>
  `

  const styles = () => css`
    [scope] {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
    }

    [scope] > div {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;

      width: 100%;
      height: 100%;
    }

    .ctx-sidebar-area {
      display: flex;
      width: 250px;
      height: 100%;
    }
    .ctx-view-area {
      display: flex;
      width: calc(100% - 250px);
    }
  `

  return { template, styles }
}
