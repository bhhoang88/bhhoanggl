import _get from 'lodash/get';

export const handleUrl = (url: string, lang: string | null = null): string => {
    if (url) {
        if (url === '') {
            return url;
        }

        let urlArr = url.split('/');

        if (['vi', 'en', 'jp'].includes(urlArr[1])) {
            urlArr[1] = lang || urlArr[1];
        } else {
            if (lang) {
                urlArr.splice(1, 0, lang);
            }
        }

        let joinUrl = urlArr.join('/');
        return joinUrl.replace('//', '/');
    }

    return url;
};

export const serialize = (href: string, obj: Record<string, any> = {}): string => {
    const str: string[] = [];

    if (href) {
        for (const p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
            }
        }

        if (href.indexOf('?') === -1) {
            return `${href}?${str.join('&')}`;
        }

        return `${href}&${str.join('&')}`;
    } else {
        return '';
    }
};

export function removeURLParameter(url: string, parameter: string): string {
    const urlparts = url.split('?');

    if (urlparts.length >= 2) {
        return urlparts[0];
    }

    return url;
}

export function getPathname(): string[] | null {
    if (typeof window !== 'undefined') {
        const pathname = _get(window, 'location.pathname');

        if (pathname) {
            try {
                return pathname.split('/').filter(Boolean);
            } catch (e) {
                return null;
            }
        }
    }

    return null;
}
