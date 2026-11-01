import i from "CR";
export var G = {
  [i.Q.ErrOffline]: {
    starlingKey: "web_canny_network_error",
    defaultText: "Check your internet connection and try again",
  },
  [i.Q.ErrCreditPreDeductNotEnough]: {
    starlingKey: "web_dre_m10n_generate_popup_credit_ininsufficient_title",
    defaultText: "credit not enough",
  },
  [i.Q.ErrCreditPreDeductNotEnough1]: {
    starlingKey: "web_dre_m10n_generate_popup_credit_ininsufficient_title",
    defaultText: "credit not enough",
  },
  [i.Q.ErrTeamUserNotInTeam]: {
    starlingKey: "web_team_removed_from_space_operation_failed",
    defaultText: "Operation failed. You are no longer in this team space.",
  },
  [i.Q.ErrTeamStatusInvalid]: {
    starlingKey: "web_team_upload_membership_expired_desc",
    defaultText: "Subscribe to a team plan to use team benefits.",
  },
  [i.Q.ErrTeamInfoFetchFailed]: {
    starlingKey: "web_team_info_fetch_failed_title",
    defaultText: "Could not load team info. Refresh and try again.",
  },
  [i.Q.ErrTeamCreditNotEnoughOwner]: {
    starlingKey: "web_team_points_insufficient_tip",
    defaultText: "Not enough credits. Buy credits to continue generating.",
  },
  [i.Q.ErrTeamCreditNotEnoughMember]: {
    starlingKey: "web_team_points_insufficient_contact_creator",
    defaultText:
      "Not enough credits. Contact the creator to buy and allocate credits.",
  },
  [i.Q.ErrTeamMembershipUnavailableOwner]: {
    starlingKey: "web_team_upload_membership_expired_desc",
    defaultText: "Subscribe to a team plan to use team benefits.",
  },
  [i.Q.ErrTeamMembershipUnavailableMember]: {
    starlingKey: "web_team_upload_membership_expired_member_desc",
    defaultText:
      "Contact the creator to subscribe to a team plan and use team benefits.",
  },
  [i.Q.ErrTeamSeatsOverLimitOwner]: {
    starlingKey: "web_team_member_seat_limit_exceeded_desc",
    defaultText:
      "Team benefits are unavailable. Add seats or remove members, then try again.",
  },
  [i.Q.ErrTeamSeatsOverLimitMember]: {
    starlingKey: "web_team_member_seat_limit_exceeded_member_desc",
    defaultText:
      "Team benefits are unavailable. Contact the creator to add seats or remove members, then try again.",
  },
  [i.Q.ErrPending]: {
    starlingKey: "fail2generate_sending",
    defaultText: "Sending...",
  },
  [i.Q.ErrClientBlendParamsUnavailable]: {
    starlingKey: "web_generate_failed_refresh_toast",
    defaultText: "An error occurred. Refresh and try again.",
  },
  [i.Q.ErrCommercialSharkBlock]: {
    starlingKey: "dre_risk_notification_toast",
    defaultText:
      "We’ve noticed some unusual activity in your account. To protect security, you can’t proceed for the moment.",
  },
  [i.Q.ErrRateLimit]: {
    starlingKey: "web_fail2generate_request_retry",
    defaultText: "Too many people are generating images now. Try again later.",
  },
  [i.Q.RateLimit]: {
    starlingKey: "web_fail2generate_server_busy",
    defaultText: "The server is busy at the moment. Try again later.",
  },
  [i.Q.ErrPunishLimitAIGenerate]: {
    starlingKey: "web_account_block_toast_feedback",
    defaultText:
      "Sorry, the system has detected multiple violations and cannot use this function. You can check the unblocking time through the message center. If you have any problems, please give us feedback.",
  },
  [i.Q.ErrSharkNotPass]: {
    starlingKey: "web_account_block_toast_feedback",
    defaultText:
      "Sorry, the system has detected multiple violations and cannot use this function. You can check the unblocking time through the message center. If you have any problems, please give us feedback.",
  },
  [i.Q.ErrPreImgRiskNotPass]: {
    starlingKey: "web_fail2generate_image_unavailable",
    defaultText:
      "The reference image you uploaded may contain content that violates our Community Guidelines. Try another image.",
  },
  [i.Q.ErrSegmentFailed]: {
    starlingKey: "web_fail2generate_input_retry",
    defaultText:
      "The prompt may contain content that violates our Community Guidelines. Change it and try again.",
  },
  [i.Q.ErrPreTextRiskNotPass]: {
    starlingKey: "web_fail2generate_input_retry",
    defaultText:
      "The prompt may contain content that violates our Community Guidelines. Change it and try again.",
  },
  [i.Q.ErrPreTextIPBlockList]: {
    starlingKey: "web_fail2generate_input_retry",
    defaultText:
      "The prompt may contain content that violates our Community Guidelines. Change it and try again.",
  },
  [i.Q.ErrGenerate]: {
    starlingKey: "web_fail2generate_retry",
    defaultText: "Couldn't generate. Try again later.",
  },
  [i.Q.ErrAccessLimit]: {
    starlingKey: "web_fail2generate_notice_max_limit",
    defaultText:
      "You've run out of uses for generating images today. Come back tomorrow.",
  },
  [i.Q.ErrUnsupportedByBeta]: {
    starlingKey: "web_fail2generate_image_unavailable",
    defaultText:
      "The reference image you uploaded may contain content that violates our Community Guidelines. Try another image.",
  },
  [i.Q.ImageCopyrightBlock]: {
    starlingKey: "web_image_violates_community_guidelines_toast",
    defaultText:
      "The image you uploaded may contain content that violates our Community Guidelines. Try another image.",
  },
  [i.Q.ErrPostImgRiskNotPass]: {
    starlingKey: "web_fail2generate_copyright_block",
    defaultText: "This image may contain inappropriate content",
  },
  [i.Q.ErrGenerateImageCopyrightBlock]: {
    starlingKey: "web_fail2generate_copyright_block",
    defaultText: "This image may contain inappropriate content",
  },
  [i.Q.ErrUploadImageCopyrightBlock]: {
    starlingKey: "web_fail2generate_image_unavailable",
    defaultText:
      "The reference image you uploaded may contain content that violates our Community Guidelines. Try another image.",
  },
  [i.Q.ErrAssetsCodeNotExist]: {
    starlingKey: "web_fail2generate_invalid_style_code",
    defaultText: "The style code is invalid. Try another one.",
  },
  [i.Q.ErrAssetsStatusInvalid]: {
    starlingKey: "web_fail2generate_style_code_expired",
    defaultText: "The style code is not available anymore. Try another one.",
  },
  [i.Q.ImageSecurityBlockNotRetry]: {
    starlingKey: "web_fail2generate_copyright_block",
    defaultText: "This image may contain inappropriate content.",
  },
  [i.Q.VideoSecurityBlock]: {
    starlingKey: "web_upload_video_violates_community_guidelines_toast",
    defaultText:
      "The video you uploaded may contain content that violates our Community Guidelines. Try another video.",
  },
  [i.Q.ImageSecurityBlock]: {
    starlingKey: "web_image_violates_community_guidelines_toast",
    defaultText:
      "The image you uploaded may contain content that violates our Community Guidelines. Try another image.",
  },
  [i.Q.SecurityNotPass]: {
    starlingKey: "web_video_not_approved",
    defaultText: "Your image or text did not pass review",
  },
  [i.Q.SecurityNotRetry]: {
    starlingKey: "web_video_violates_community_guidelines_toast",
    defaultText: "This video may contain inappropriate content",
  },
  [i.Q.TextSecurityBlock]: {
    starlingKey: "web_text_violates_community_guidelines_toast",
    defaultText:
      "The prompt may contain content that violates our Community Guidelines. Change it and try again.",
  },
  [i.Q.TextCopyrightBlock]: {
    starlingKey: "web_text_violates_community_guidelines_toast",
    defaultText:
      "The prompt may contain content that violates our Community Guidelines. Change it and try again.",
  },
  [i.Q.AudioSecurityBlock]: {
    starlingKey: "web_audio_violates_community_guidelines_toast",
    defaultText:
      "The audio you uploaded may contain content that violates our Community Guidelines. Try another one.",
  },
  [i.Q.ICDetectVideoNoAvailablePerson]: {
    starlingKey: "web_avatar_micmic_toast_upload_motion_fail",
    defaultText: "No character detected",
  },
  [i.Q.VideoTemplateImageNotMatch]: {
    starlingKey: "web_avatar_micmic_gen_err_input_ratio_mismatch",
    defaultText:
      "The character's proportion in the image and video differs too much",
  },
  [i.Q.ICDetectVideoSizeTooSmall]: {
    starlingKey: "web_avatar_micmic_toast_motion_res_too_low",
    defaultText: "The resolution is too low",
  },
  [i.Q.ICDetectVideoSizeTooLarge]: {
    starlingKey: "web_avatar_micmic_toast_motion_res_too_high",
    defaultText: "The resolution is too high",
  },
  [i.Q.ICDetectVideoDurationTooShort]: {
    starlingKey: "web_avatar_micmic_toast_motion_length_invalid",
    defaultText: "The video duration doesn't meet the requirements",
  },
  [i.Q.ICDetectVideoDurationTooLong]: {
    starlingKey: "web_avatar_micmic_toast_motion_length_invalid",
    defaultText: "The video duration doesn't meet the requirements",
  },
  [i.Q.ICDetectVideoScaleError]: {
    starlingKey: "web_avatar_micmic_reload_motion_hint_character_ratio_change",
    defaultText: "The character's distance changes too much",
  },
  [i.Q.ErrSamiConcurrencyLimit]: {
    starlingKey: "web_fail2generate_server_busy",
    defaultText: "The server is busy at the moment. Try again later.",
  },
  [i.Q.ErrSamiInvalidChar]: {
    starlingKey: "web_ai_music_language_warning_2",
    defaultText: "Only Chinese and English input is supported",
  },
  [i.Q.ErrMixCnEnErr]: {
    starlingKey: "web_ai_music_language_warning_1",
    defaultText: "web_ai_music_language_warning_1",
  },
  [i.Q.ErrNotSupportLang]: {
    starlingKey: "web_ai_music_language_warning_2",
    defaultText: "Only Chinese and English input is supported",
  },
  [i.Q.ErrCopyright]: {
    starlingKey: "web_ai_music_copyrightsfail",
    defaultText: "Only lyrics input mainly in Chinese is supported",
  },
  [i.Q.ErrAgenticSubmitFailed]: {
    starlingKey: "web_upload_agent_fail_toast",
    defaultText: "Agent Task Submit failed",
  },
  [i.Q.ErrReachedDailyGenerationLimit]: {
    starlingKey: "web_notice_reach_daily_usage_limit",
    defaultText: "Can't generate. You’ve reached your daily generation limit.",
  },
  [i.Q.VoiceNotExistFail]: {
    starlingKey: "web_voice_not_exist",
    defaultText: "The voice you selected does not exist",
  },
};
