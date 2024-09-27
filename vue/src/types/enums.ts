export enum IconType {
    None = '',
    Facebook = 'fa-brands fa-facebook-square',
    Instagram = 'fa-brands fa-instagram',
    Youtube = 'fa-brands fa-youtube',
    SoundCloud = 'fa-brands fa-soundcloud',
    XTwitter = 'fa-brands fa-x-twitter',
    LinkedIn = 'fa-brands fa-linkedin',
    PDF = 'fa-regular fa-file-pdf',
    DOCX = 'fa-regular fa-file-word',
    link = 'fa-solid fa-link',
    trashCan = 'fa-regular fa-trash-can',
    plus = 'fa-solid fa-plus'
}

export const IconTypeLinkMapping: Partial<Record<IconType, string>> = {
    [IconType.Facebook]: "Facebook",
    [IconType.Instagram]: "Instagram",
    [IconType.Youtube]: "Youtube",
    [IconType.SoundCloud]: "SoundCloud",
    [IconType.XTwitter]: "Twitter",
    [IconType.LinkedIn]: "LinkedIn",
};

export const IconTypeFiletypeMapping: Partial<Record<IconType, string>> = {
    [IconType.PDF]: "PDF",
    [IconType.DOCX]: "Word",
};
