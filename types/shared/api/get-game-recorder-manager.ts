import { Callback } from "../../app/api"
import { SyncAPI } from "./types"


export const getGameRecorderManager: SyncAPI<
  [],
  GameRecorderManager
>

type StartOption {
    /** 录屏的时长，单位 s，必须大于 3s，最大值 300s（5 分钟）。 */
    duration: number
    /**是否添加水印，会在录制出来的视频上添加默认水印，目前不支持自定义水印图案。 */
    isMarkOpen: boolean
    /**水印距离屏幕上边界的位置，单位为 dp。 */
    locTop: number
    /**水印距离屏幕左边界的位置，单位为 dp */
    locLeft: number
    /**设置录屏帧率，对于性能较差的手机可以调低参数以降低录屏性能消耗。 */
    frameRate: number

}

interface GameRecorderManager {
    /** 开始录屏 */
    start(options: StartOption): void
    /** 当广告素材加载出现错误时，可以通过 load 方法手动加载 */
    onStart(fn: Callback): void
    /** 暂停 */
    pause():void
    /** 继续 */
    resume(): void
    /** 停止 */
    stop(): void
    /** 结束 */
    onStop(fn: Callback): void
  }
  
