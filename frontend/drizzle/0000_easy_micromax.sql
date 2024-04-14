CREATE TABLE `chats` (
	`id` text PRIMARY KEY NOT NULL,
	`sessionId` text NOT NULL,
	`userType` text NOT NULL,
	`string` text,
	`messagedOn` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`sessionId`) REFERENCES `session`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` text PRIMARY KEY NOT NULL,
	`sessionCreatedUserId` text NOT NULL,
	`createdOn` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`sessionCreatedUserId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`email` text NOT NULL,
	`hashedPassword` text NOT NULL
);
