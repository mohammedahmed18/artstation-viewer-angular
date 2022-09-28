import { Component, Input, OnInit } from '@angular/core';
import { defaultUser } from 'src/app/default/user';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-user-avatar',
  template: `
    <div class="my-2 flex gap-2 items-center py-2 rounded-2xl px-1">
      <img [lazyLoad]="user.medium_avatar_url" class="rounded-full w-12 h-12" />
      <p class="ml-2 text-primary-content overflow-hidden font-semibold">
        @{{ user.username }}
      </p>
    </div>
  `,
  styleUrls: ['./user-avatar.component.css'],
})
export class UserAvatarComponent implements OnInit {
  @Input() user: User = defaultUser;
  constructor() {}

  ngOnInit(): void {}
}
