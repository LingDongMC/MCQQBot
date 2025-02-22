export default class BotConfig {
    servertap_host: string
    servertap_port: number
    servertap_key: string

    cqhttp_ws_uri: string

    qq_bot_id: number
    qq_group_id: number
    qq_admin_ids: number[]

    reconnect_interval: number

    constructor(config_obj: Partial<BotConfig>) {
        Object.assign(this, config_obj)
    }

    public get_servertap_ws_url() {
        return `ws://${this.servertap_host}:${this.servertap_port}/v1/ws/console`
    }

    public get_servertap_api_url() {
        return `http://${this.servertap_host}:${this.servertap_port}`
    }
}

