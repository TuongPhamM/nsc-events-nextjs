export interface ActivityDatabase {
    _id: string;
    createdByUser: string;
    eventTitle: string;
    eventDescription: string;
    eventCategory: string;
    eventDate: string;
    eventStartTime: string;
    eventEndTime: string;
    eventLocation: string;
    eventCoverPhoto: string;
    eventHost: string;
    eventRegistration: string;
    eventCapacity: number;
    eventTags: string[];
    eventSchedule: string;
    eventSpeakers: string[];
    eventPrerequisites: string;
    eventCancellationPolicy: string;
    eventContact: string;
    eventSocialMedia: {
        facebook: string;
        twitter: string;
        instagram: string;
        hashtag: string;
    };
    eventPrivacy: string;
    eventAccessibility: string;
    eventMeetingUrl: string;
    eventNote: string;
    isHidden?: boolean;
    isArchived?: boolean;
}

export const activityDatabase: ActivityDatabase = {
    _id: "",
    createdByUser: "",
    eventTitle: "",
    eventDescription: "",
    eventCategory: "",
    eventDate: "",
    eventStartTime: "",
    eventEndTime: "",
    eventLocation: "",
    eventCoverPhoto: "",
    eventHost: "",
    eventRegistration: "",
    eventCapacity: 0,
    eventTags: [],
    eventSchedule: "",
    eventSpeakers: [],
    eventPrerequisites: "",
    eventCancellationPolicy: "",
    eventContact: "",
    eventSocialMedia: {
        facebook: "",
        twitter: "",
        instagram: "",
        hashtag: ""
    },
    eventPrivacy: "",
    eventNote: "",
    eventMeetingUrl: "",
    eventAccessibility: ""
};
