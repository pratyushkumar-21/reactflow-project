import CreateTextNode from "../components/CreateTextNode";
import EditTextNode from "../components/EditTextNode";

export default function SettingPanel(props) {
  const { setNodes, selectedNode } = props;

  return (
    <div className="setting-panel">
      {!selectedNode ? (
        <CreateTextNode setNodes={setNodes} />
      ) : (
        <EditTextNode {...props} />
      )}
    </div>
  );
}
