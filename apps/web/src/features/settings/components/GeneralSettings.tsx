import type { Theme } from '../theme';
import { Icon } from '../../../components/Icon';
import { Switch } from '../../../components/Switch';
import { ThemeSelect } from './ThemeSelect';
import type { GeneralSettingsControls } from '../hooks/useGeneralSettings';

export function GeneralSettings({ theme, onThemeChange, controls }: { theme: Theme; onThemeChange: (theme: Theme) => void; controls: GeneralSettingsControls }) {
  return <div className="settings-fields">
    <div className="settings-field">
      <div className="settings-field-copy"><label htmlFor="settings-language">语言</label><p id="settings-language-hint">选择应用的显示语言</p></div>
      <div className="settings-select settings-native-select">
        <select id="settings-language" aria-describedby="settings-language-hint" defaultValue="zh-CN"><option value="zh-CN">中文</option></select>
        <Icon name="chevron-down" />
      </div>
    </div>
    <div className="settings-field">
      <div className="settings-field-copy"><label id="settings-theme-label" htmlFor="settings-theme">主题</label><p id="settings-theme-hint">选择浅色或深色主题</p></div>
      <ThemeSelect theme={theme} onThemeChange={onThemeChange} />
    </div>
    <div className="settings-field settings-watermark-field">
      <div className="settings-field-copy"><label id="settings-watermark-label" htmlFor="settings-watermark">去除水印</label><p id="settings-watermark-hint">关闭 AI 生成内容中的可见水印。仅对未来生成内容生效，已生成的资产保留原状。</p></div>
      <div className="settings-switch-control">
        <Switch id="settings-watermark" checked={controls.value?.removeWatermark ?? false}
          aria-labelledby="settings-watermark-label" aria-describedby="settings-watermark-hint settings-watermark-status"
          disabled={controls.loading || controls.busy || controls.value === null}
          onClick={() => { if (controls.value) void controls.setRemoveWatermark(!controls.value.removeWatermark); }} />
        <p id="settings-watermark-status" role="status">{controls.busy ? '保存中…' : controls.loading ? '读取中…' : controls.value === null ? '状态未确认' : `当前：${controls.value.removeWatermark ? '无水印' : '有水印'}`}</p>
      </div>
    </div>
    {controls.error && <div className="settings-notice" role="alert"><span>{controls.error}</span><button type="button" className="secondary-button" disabled={controls.loading || controls.busy} onClick={() => void controls.refresh()}>重新读取</button></div>}
  </div>;
}
