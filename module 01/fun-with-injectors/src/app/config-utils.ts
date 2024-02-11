import { inject } from "@angular/core";
import { ConfigService } from "./services/config.service";

export function urlBuilder() {
    const config = inject(ConfigService);
    return (postFix: string) => `${config.url}/${postFix}`;
}

export async function runMeInInjectionContext() {
    const config = inject(ConfigService);
    await new Promise(res => setTimeout(res, 3000));
    const cfg2 = inject(ConfigService);
}
