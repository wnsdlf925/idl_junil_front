import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { HomeComponent } from './home/home.component';
import { AnnoComponent } from './anno/anno.component';
import { IdeaComponent } from './idea/idea.component';
import { NoticeComponent } from './notice/notice.component';
import { CsComponent } from './cs/cs.component';
import { CsUploadComponent } from './cs-upload/cs-upload.component';
import { LoginComponent } from './login/login.component';
import { JoinAuthComponent } from './join-auth/join-auth.component';
import { ChosenAgreeComponent } from './chosen-agree/chosen-agree.component';
import { JoinComponent } from './join/join.component';
import { FindPwComponent } from './find-pw/find-pw.component';
import { ResetPwComponent } from './reset-pw/reset-pw.component';
import { ContactComponent } from './contact/contact.component';
import { IdeaPushComponent } from './idea-push/idea-push.component';
import { CheckInfoComponent } from './check-info/check-info.component';
import { ReviseComponent } from './revise/revise.component';
import { PointComponent } from './point/point.component';
import { MyInterComponent } from './my-inter/my-inter.component';
import { MyIdeaComponent } from './my-idea/my-idea.component';
import { CsDetailComponent } from './cs-detail/cs-detail.component';
import { NoticeDetailComponent } from './notice-detail/notice-detail.component';
import { IdeaResetComponent } from './idea-reset/idea-reset.component';
import { CsResetComponent } from './cs-reset/cs-reset.component';
import { AdLoginComponent } from './ad-login/ad-login.component';
import { AdNoticeLogComponent } from './ad-notice-log/ad-notice-log.component';
import { AdNoticeResetComponent } from './ad-notice-reset/ad-notice-reset.component';
import { AdNoticeUploadComponent } from './ad-notice-upload/ad-notice-upload.component';
import { AdContactLogComponent } from './ad-contact-log/ad-contact-log.component';
import { AdContactAnswerComponent } from './ad-contact-answer/ad-contact-answer.component';
import { AdCsLogComponent } from './ad-cs-log/ad-cs-log.component';
import { AdCsAnswerComponent } from './ad-cs-answer/ad-cs-answer.component';
import { AdMemberInfoComponent } from './ad-member-info/ad-member-info.component';
import { AdUserBanComponent } from './ad-user-ban/ad-user-ban.component';
import { AdUserSecedeComponent } from './ad-user-secede/ad-user-secede.component';
import { AdUserLogComponent } from './ad-user-log/ad-user-log.component';
import { AdTotalUserLogComponent } from './ad-total-user-log/ad-total-user-log.component';




const routes: Routes = [
  // 회원쪽
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent}, 
  { path: 'board/anno', component: AnnoComponent },
  { path: 'board/idea', component: IdeaComponent  },
  { path: 'board/notice', component: NoticeComponent  },
  { path: 'board/cs', component: CsComponent  },
  { path: 'board/cs/csUpload', component: CsUploadComponent  },
  { path: 'member/login', component: LoginComponent  },
  { path: 'member/joinAuth', component: JoinAuthComponent  },
  { path: 'member/chosenAgree', component: ChosenAgreeComponent  },
  { path: 'member/join', component: JoinComponent  },
  { path: 'member/findPw', component: FindPwComponent  },
  { path: 'member/resetPw', component: ResetPwComponent  },
  { path: 'board/contact', component: ContactComponent  },
  { path: 'member/myIdea/ideaPush', component: IdeaPushComponent  },
  { path: 'member/checkInfo', component: CheckInfoComponent  },
  { path: 'member/revise', component: ReviseComponent  },
  { path: 'member/point', component: PointComponent  },
  { path: 'member/myInter', component: MyInterComponent  },
  { path: 'member/myIdea', component: MyIdeaComponent  },
  { path: 'board/cs/detail', component: CsDetailComponent  },
  { path: 'board/notice/detail', component: NoticeDetailComponent  },
  { path: 'member/myIdea/ideaReset', component: IdeaResetComponent  },
  { path: 'board/cs/reset', component: CsResetComponent  },
 //관리자 쪽
  { path: 'admin/login', component: AdLoginComponent  },
  { path: 'admin/memberInfo', component: AdMemberInfoComponent  },
  { path: 'admin/userBan', component: AdUserBanComponent  },
  { path: 'admin/userSecede', component: AdUserSecedeComponent  },
  { path: 'admin/userLog', component: AdUserLogComponent  },
  { path: 'admin/totalUserLog', component: AdTotalUserLogComponent  },
  { path: 'admin/csAnswer', component: AdCsAnswerComponent  },
  { path: 'admin/csLog', component: AdCsLogComponent  },
  { path: 'admin/contactAnswer', component: AdContactAnswerComponent  },
  { path: 'admin/contactLog', component: AdContactLogComponent  },
  { path: 'admin/noticeUpload', component: AdNoticeUploadComponent  },
  { path: 'admin/notice/reset', component: AdNoticeResetComponent  },
  { path: 'admin/notice/log', component: AdNoticeLogComponent  },




  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }