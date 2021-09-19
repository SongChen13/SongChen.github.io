<?php

/**
 * Copyright (C) 2020 Tencent Cloud.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace App\Models;

use App\Common\CacheKey;
use Carbon\Carbon;
use Discuz\Base\DzqCache;
use Discuz\Base\DzqModel;

/**
 * Models a thread-user state record in the database.
 *
 * @property int $id
 * @property int $user_id
 * @property int $thread_id
 * @property int $status
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */
class ThreadUserStickRecord extends DzqModel
{
    protected $table = 'thread_sticks';

    const STATUS_NO = 0;
    const STATUS_YES = 1;

}
