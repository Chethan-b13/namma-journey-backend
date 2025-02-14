export const USER_ROLES = {
  ADMIN: 'admin',
  AGENCY: 'agency',
  TRAVEL_PARTNER: 'travel partner',
  TRAVELER: 'traveler',
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];
export const VALID_USER_ROLES: UserRole[] = Object.values(USER_ROLES);
