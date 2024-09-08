CREATE TABLE notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    sender_id INT NULL,
    message TEXT NOT NULL,
    important BOOLEAN DEFAULT FALSE,
    status VARCHAR(20) DEFAULT 'unread',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_at TIMESTAMP NULL,
    INDEX (user_id),
    INDEX (status),
    INDEX (created_at),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (sender_id) REFERENCES users(id)
);

INSERT INTO notifications (user_id, sender_id, message, important, status, created_at, read_at)
VALUES
-- Notifications for johndoe
(1, 4, 'System maintenance scheduled for tomorrow.', FALSE, 'unread', '2024-09-06 09:00:00', NULL),
(1, 2, 'Meeting rescheduled to 3 PM.', TRUE, 'unread', '2024-09-05 10:30:00', NULL),
(1, 3, 'Your password will expire in 5 days.', FALSE, 'unread', '2024-09-04 08:00:00', NULL),

-- Notifications for janedoe
(2, 1, 'Monthly performance report is ready.', TRUE, 'unread', '2024-09-06 12:15:00', NULL),
(2, 4, 'New updates available for the system.', FALSE, 'unread', '2024-09-06 09:45:00', NULL),
(2, 5, "Don't forget to complete your profile.", FALSE, 'read', '2024-09-03 14:30:00', '2024-09-03 15:00:00'),

-- Notifications for michaelb
(3, 4, 'Your account will be reactivated soon.', FALSE, 'unread', '2024-09-01 16:20:00', NULL),
(3, 2, 'You have an upcoming meeting with HR.', TRUE, 'read', '2024-08-31 10:00:00', '2024-08-31 11:00:00'),
(3, 1, 'System maintenance scheduled for tomorrow.', FALSE, 'unread', '2024-08-30 11:30:00', NULL),

-- Notifications for emilyw
(4, 1, 'Security alert: Suspicious login attempt detected.', TRUE, 'unread', '2024-09-06 08:00:00', NULL),
(4, 3, 'System updates successfully installed.', FALSE, 'read', '2024-09-05 07:50:00', '2024-09-05 08:00:00'),
(4, 2, 'Your report has been reviewed.', FALSE, 'read', '2024-09-02 15:30:00', '2024-09-02 16:00:00'),

-- Notifications for davidj
(5, 3, 'System maintenance completed.', FALSE, 'unread', '2024-09-06 06:30:00', NULL),
(5, 1, 'Your access request was approved.', TRUE, 'unread', '2024-09-04 10:20:00', NULL),
(5, 4, 'New updates to your profile.', FALSE, 'unread', '2024-09-03 09:00:00', NULL),

-- Notifications for sarahk
(6, 2, 'Your account is scheduled for deactivation.', TRUE, 'unread', '2024-09-01 12:10:00', NULL),
(6, 3, 'New security patch installed.', FALSE, 'read', '2024-08-31 11:00:00', '2024-08-31 12:00:00'),
(6, 5, 'Meeting rescheduled to 11 AM.', FALSE, 'unread', '2024-08-30 07:45:00', NULL),

-- Notifications for chrisl
(7, 2, 'New messages in your inbox.', TRUE, 'read', '2024-09-06 09:00:00', '2024-09-06 09:30:00'),
(7, 1, 'Reminder: Password reset required.', FALSE, 'unread', '2024-09-03 08:00:00', NULL);

