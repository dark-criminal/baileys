/// <reference types="long" />
/// <reference types="node" />
import { UserFacingSocketConfig } from '../Types';
declare const makeWASocket: (config: UserFacingSocketConfig) => {
    register: (code: string) => Promise<import("./registration").ExistsResponse>;
    requestRegistrationCode: (registrationOptions?: import("./registration").RegistrationOptions | undefined) => Promise<import("./registration").ExistsResponse>;
    logger: import("pino").Logger<import("pino").LoggerOptions>;
    getOrderDetails: (orderId: string, tokenBase64: string) => Promise<import("../Types").OrderDetails>;
    getCatalog: ({ jid, limit, cursor }: import("../Types").GetCatalogOptions) => Promise<{
        products: import("../Types").Product[];
        nextPageCursor: string | undefined;
    }>;
    getCollections: (jid?: string | undefined, limit?: number) => Promise<{
        collections: import("../Types").CatalogCollection[];
    }>;
    productCreate: (create: import("../Types").ProductCreate) => Promise<import("../Types").Product>;
    productDelete: (productIds: string[]) => Promise<{
        deleted: number;
    }>;
    productUpdate: (productId: string, update: import("../Types").ProductUpdate) => Promise<import("../Types").Product>;
    sendMessageAck: ({ tag, attrs, content }: import("../index").BinaryNode) => Promise<void>;
    sendRetryRequest: (node: import("../index").BinaryNode, forceIncludeKeys?: boolean) => Promise<void>;
    rejectCall: (callId: string, callFrom: string) => Promise<void>;
    fetchMessageHistory: (count: number, oldestMsgKey: import("../Types").WAProto.IMessageKey, oldestMsgTimestamp: number | import("long").Long) => Promise<string>;
    requestPlaceholderResend: (messageKey: import("../Types").WAProto.IMessageKey) => Promise<string | undefined>;
    getPrivacyTokens: (jids: string[]) => Promise<import("../index").BinaryNode>;
    assertSessions: (jids: string[], force: boolean) => Promise<boolean>;
    relayMessage: (jid: string, message: import("../Types").WAProto.IMessage, { messageId: msgId, participant, additionalAttributes, additionalNodes, useUserDevicesCache, useCachedGroupMetadata, statusJidList }: import("../Types").MessageRelayOptions) => Promise<string>;
    sendReceipt: (jid: string, participant: string | undefined, messageIds: string[], type: import("../Types").MessageReceiptType) => Promise<void>;
    sendReceipts: (keys: import("../Types").WAProto.IMessageKey[], type: import("../Types").MessageReceiptType) => Promise<void>;
    readMessages: (keys: import("../Types").WAProto.IMessageKey[]) => Promise<void>;
    refreshMediaConn: (forceGet?: boolean) => Promise<import("../Types").MediaConnInfo>;
    waUploadToServer: import("../Types").WAMediaUploadFunction;
    fetchPrivacySettings: (force?: boolean) => Promise<{
        [_: string]: string;
    }>;
    sendPeerDataOperationMessage: (pdoMessage: import("../Types").WAProto.Message.IPeerDataOperationRequestMessage) => Promise<string>;
    createParticipantNodes: (jids: string[], message: import("../Types").WAProto.IMessage, extraAttrs?: {
        [key: string]: string;
    } | undefined) => Promise<{
        nodes: import("../index").BinaryNode[];
        shouldIncludeDeviceIdentity: boolean;
    }>;
    getUSyncDevices: (jids: string[], useCache: boolean, ignoreZeroDevices: boolean) => Promise<import("../index").JidWithDevice[]>;
    updateMediaMessage: (message: import("../Types").WAProto.IWebMessageInfo) => Promise<import("../Types").WAProto.IWebMessageInfo>;
    sendMessage: (jid: string, content: import("../Types").AnyMessageContent, options?: import("../Types").MiscMessageGenerationOptions) => Promise<import("../Types").WAProto.WebMessageInfo | undefined>;
    groupMetadata: (jid: string) => Promise<import("../Types").GroupMetadata>;
    groupCreate: (subject: string, participants: string[]) => Promise<import("../Types").GroupMetadata>;
    groupLeave: (id: string) => Promise<void>;
    groupUpdateSubject: (jid: string, subject: string) => Promise<void>;
    groupRequestParticipantsList: (jid: string) => Promise<{
        [key: string]: string;
    }[]>;
    groupRequestParticipantsUpdate: (jid: string, participants: string[], action: "reject" | "approve") => Promise<{
        status: string;
        jid: string;
    }[]>;
    groupParticipantsUpdate: (jid: string, participants: string[], action: import("../Types").ParticipantAction) => Promise<{
        status: string;
        jid: string;
        content: import("../index").BinaryNode;
    }[]>;
    groupUpdateDescription: (jid: string, description?: string | undefined) => Promise<void>;
    groupInviteCode: (jid: string) => Promise<string | undefined>;
    groupRevokeInvite: (jid: string) => Promise<string | undefined>;
    groupAcceptInvite: (code: string) => Promise<string | undefined>;
    groupRevokeInviteV4: (groupJid: string, invitedJid: string) => Promise<boolean>;
    groupAcceptInviteV4: (key: string | import("../Types").WAProto.IMessageKey, inviteMessage: import("../Types").WAProto.Message.IGroupInviteMessage) => Promise<string>;
    groupGetInviteInfo: (code: string) => Promise<import("../Types").GroupMetadata>;
    groupToggleEphemeral: (jid: string, ephemeralExpiration: number) => Promise<void>;
    groupSettingUpdate: (jid: string, setting: "announcement" | "locked" | "not_announcement" | "unlocked") => Promise<void>;
    groupMemberAddMode: (jid: string, mode: "all_member_add" | "admin_add") => Promise<void>;
    groupJoinApprovalMode: (jid: string, mode: "on" | "off") => Promise<void>;
    groupFetchAllParticipating: () => Promise<{
        [_: string]: import("../Types").GroupMetadata;
    }>;
    processingMutex: {
        mutex<T>(code: () => T | Promise<T>): Promise<T>;
    };
    upsertMessage: (msg: import("../Types").WAProto.IWebMessageInfo, type: import("../Types").MessageUpsertType) => Promise<void>;
    appPatch: (patchCreate: import("../Types").WAPatchCreate) => Promise<void>;
    sendPresenceUpdate: (type: import("../Types").WAPresence, toJid?: string | undefined) => Promise<void>;
    presenceSubscribe: (toJid: string, tcToken?: Buffer | undefined) => Promise<void>;
    profilePictureUrl: (jid: string, type?: "image" | "preview", timeoutMs?: number | undefined) => Promise<string | undefined>;
    onWhatsApp: (...jids: string[]) => Promise<{
        exists: boolean;
        jid: string;
    }[]>;
    fetchBlocklist: () => Promise<string[]>;
    fetchStatus: (jid: string) => Promise<{
        status: string | undefined;
        setAt: Date;
    } | undefined>;
    updateProfilePicture: (jid: string, content: import("../Types").WAMediaUpload) => Promise<void>;
    removeProfilePicture: (jid: string) => Promise<void>;
    updateProfileStatus: (status: string) => Promise<void>;
    updateProfileName: (name: string) => Promise<void>;
    updateBlockStatus: (jid: string, action: "block" | "unblock") => Promise<void>;
    updateCallPrivacy: (value: import("../Types").WAPrivacyCallValue) => Promise<void>;
    updateLastSeenPrivacy: (value: import("../Types").WAPrivacyValue) => Promise<void>;
    updateOnlinePrivacy: (value: import("../Types").WAPrivacyOnlineValue) => Promise<void>;
    updateProfilePicturePrivacy: (value: import("../Types").WAPrivacyValue) => Promise<void>;
    updateStatusPrivacy: (value: import("../Types").WAPrivacyValue) => Promise<void>;
    updateReadReceiptsPrivacy: (value: import("../Types").WAReadReceiptsValue) => Promise<void>;
    updateGroupsAddPrivacy: (value: import("../Types").WAPrivacyGroupAddValue) => Promise<void>;
    updateDefaultDisappearingMode: (duration: number) => Promise<void>;
    getBusinessProfile: (jid: string) => Promise<void | import("../Types").WABusinessProfile>;
    resyncAppState: (collections: readonly ("critical_block" | "critical_unblock_low" | "regular_high" | "regular_low" | "regular")[], isInitialSync: boolean) => Promise<void>;
    chatModify: (mod: import("../Types").ChatModification, jid: string) => Promise<void>;
    cleanDirtyBits: (type: "account_sync" | "groups", fromTimestamp?: string | number | undefined) => Promise<void>;
    addChatLabel: (jid: string, labelId: string) => Promise<void>;
    removeChatLabel: (jid: string, labelId: string) => Promise<void>;
    addMessageLabel: (jid: string, messageId: string, labelId: string) => Promise<void>;
    removeMessageLabel: (jid: string, messageId: string, labelId: string) => Promise<void>;
    star: (jid: string, messages: {
        id: string;
        fromMe?: boolean | undefined;
    }[], star: boolean) => Promise<void>;
    type: "md";
    ws: any;
    ev: import("../Types").BaileysEventEmitter & {
        process(handler: (events: Partial<import("../Types").BaileysEventMap>) => void | Promise<void>): () => void;
        buffer(): void;
        createBufferedFunction<A extends any[], T_1>(work: (...args: A) => Promise<T_1>): (...args: A) => Promise<T_1>;
        flush(force?: boolean | undefined): boolean;
        isBuffering(): boolean;
    };
    authState: {
        creds: import("../Types").AuthenticationCreds;
        keys: import("../Types").SignalKeyStoreWithTransaction;
    };
    signalRepository: import("../Types").SignalRepository;
    user: import("../Types").Contact | undefined;
    generateMessageTag: () => string;
    query: (node: import("../index").BinaryNode, timeoutMs?: number | undefined) => Promise<import("../index").BinaryNode>;
    waitForMessage: <T_2>(msgId: string, timeoutMs?: number | undefined) => Promise<T_2>;
    waitForSocketOpen: () => Promise<void>;
    sendRawMessage: (data: Uint8Array | Buffer) => Promise<void>;
    sendNode: (frame: import("../index").BinaryNode) => Promise<void>;
    logout: (msg?: string | undefined) => Promise<void>;
    end: (error: Error | undefined) => void;
    onUnexpectedError: (err: Error | import("@hapi/boom").Boom<any>, msg: string) => void;
    uploadPreKeys: (count?: number) => Promise<void>;
    uploadPreKeysToServerIfRequired: () => Promise<void>;
    requestPairingCode: (phoneNumber: string) => Promise<string>;
    waitForConnectionUpdate: (check: (u: Partial<import("../Types").ConnectionState>) => boolean | undefined, timeoutMs?: number | undefined) => Promise<void>;
    sendWAMBuffer: (wamBuffer: Buffer) => Promise<import("../index").BinaryNode>;
};
export default makeWASocket;