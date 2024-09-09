import { faFacebookSquare,
        faInstagram,
        faLinkedin,
        faXTwitter,
        faSoundcloud,
        faYoutube
 } from '@fortawesome/free-brands-svg-icons'
 import { faFilePdf, faFileWord } from '@fortawesome/free-regular-svg-icons'
import { Library } from '@fortawesome/fontawesome-svg-core'

export function AddIconsToLibrary (library: Library) : any {
    library.add(faFacebookSquare);
    library.add(faInstagram);
    library.add(faLinkedin);
    library.add(faXTwitter);
    library.add(faSoundcloud);
    library.add(faYoutube);
    library.add(faFilePdf);
    library.add(faFileWord);
    return library;
};