userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
has_many : messages
has_many : groups_users
has_many : groups, through: groups_users

groupテーブル
|Column|Type|Options|
|------|----|-------|
|title|string|null: false|

### Association
has_many : messages
has_many : groups_users
has_many : users, through: groups_users


messagesテーブル 
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
