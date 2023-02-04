export const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
export const TIME_REGEX = /^\d{2}:\d{2}$/;
export const SPECIAL_CHARACTER_WITH_NUMBER_REGEX =
  /[0-9!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?~]+$/g;
export const SPECIAL_CHARACTER_WITHOUT_NUMBER_REGEX =
  /[`!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?~]/;
export const NUMBER_REGEX = /^[0-9]+$/g;
export const CODE_REGEX = /^[a-zA-Z0-9_-]+$/g;
export const USERNAME_REGEX = /^[a-zA-Z0-9.-_]+$/g;
export const NAME_WITH_NUMBER_REGEX = /^[a-zA-Z0-9 ]+$/g;
export const NAME_WITHOUT_NUMBER_REGEX = /^[a-zA-Z ]+$/g;
export const PHONE_REGEX = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
export const PHONE_REGEX_WITH_COUNTRY_CODE =
  /(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/g;
export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const ID_CARD_NUMBER_REGEX = /^[0-9]+$/g;
export const PASSWORD_REGEX = /^[a-zA-Z0-9@$!%*#?&_-]{6,255}$/;
export const IMAGE_REGEX = /[\/.](gif|jpg|jpeg|tiff|png|webp)$/i;
export const VIDEO_REGEX = /[\/.](mp4)$/i;
export const LICENSE_PLATE_REGEX = /\d{2}\w-\d{4,5}$/i;
export const IMAGE_FILES_REGEX = /\.(jpg|jpeg|tiff)/;
