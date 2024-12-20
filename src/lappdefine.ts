import { LogLevel } from '@framework/live2dcubismframework';

export const CanvasSize: { width: number; height: number } | 'auto' = 'auto';

// 画面
export const ViewScale = 1.0;
export const ViewMaxScale = 2.0;
export const ViewMinScale = 0.8;

export const ViewLogicalLeft = -1.0;
export const ViewLogicalRight = 1.0;
export const ViewLogicalBottom = -1.0;
export const ViewLogicalTop = 1.0;

export const ViewLogicalMaxLeft = -2.0;
export const ViewLogicalMaxRight = 2.0;
export const ViewLogicalMaxBottom = -2.0;
export const ViewLogicalMaxTop = 2.0;

// 相対パス
export let ResourcesPath = 'https://cdn.jsdelivr.net/gh/1Natsume/live2d_model@0.1/';

// モデルの後ろにある背景の画像ファイル
export let BackImageName = 'back_class_normal.png';

// 歯車
export const GearImageName = 'icon_gear.png';

// 終了ボタン
export const PowerImageName = 'CloseNormal.png';

// モデル定義---------------------------------------------
// モデルを配置したディレクトリ名の配列
// ディレクトリ名とmodel3.jsonの名前を一致させておくこと
export let ModelDir: string[] = ['Haru', 'Hiyori', 'Mark', 'Natori', 'Rice'];
export let ModelDirSize: number = ModelDir.length;

// 外部定義ファイル（json）と合わせる
export const MotionGroupIdle = 'Idle'; // アイドリング
export const MotionGroupTapHead = 'TapHead'; 
export const MotionGroupTapBody = 'TapBody'; // 体をタップしたとき
export const MotionGroupTapTest = 'TapTest'; // 体をタップしたとき

// 外部定義ファイル（json）と合わせる
export const HitAreaNameHead = 'Head';
export const HitAreaNameBody = 'Body';
export const HitAreaNameTest = 'Test';

// モーションの優先度定数
export const PriorityNone = 0;
export const PriorityIdle = 1;
export const PriorityNormal = 2;
export const PriorityForce = 3;

// デバッグ用ログの表示オプション
export const DebugLogEnable = true;
export const DebugTouchLogEnable = false;

// Frameworkから出力するログのレベル設定
export const CubismLoggingLevel: LogLevel = LogLevel.LogLevel_Verbose;

// デフォルトのレンダーターゲットサイズ
export const RenderTargetWidth = 1900;
export const RenderTargetHeight = 1000;

export const win: any = window

win.initDefine=function(resourcesPath: string, backImageName: string, modelDir: string[]){
    ResourcesPath = resourcesPath;
    BackImageName = backImageName;
    ModelDir = modelDir;
    ModelDirSize = modelDir.length;
}

export function initDefine(resourcesPath: string, backImageName: string, modelDir: string[]){
    ResourcesPath = resourcesPath;
    BackImageName = backImageName;
    ModelDir = modelDir;
    ModelDirSize = modelDir.length;
}