/* eslint-disable prettier/prettier */
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PostsService } from '../../shared/services/posts.service';
import { generatePosts, Post } from './state/posts.model';

describe('PostsService', () => {
  let service: PostsService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should create instance successfully', () => {
    expect(service).toBeDefined();
  });

  describe('api call for posts', () => {
    let posts: Post[];
    let postResult: Post[];
    beforeEach(() => {
      posts = generatePosts(3);
    });

    it('should get Roles', () => {
      service.getPosts().subscribe(null);
      const req = http.expectOne({
        method: 'GET',
        url: `https://vue-completecourse.firebaseio.com/posts.json`,
      });
    });
    it('should add Role', () => {
      let roleresult: any;
      const roles = generatePosts(1);
      service.addPost(roles[0]).subscribe(result => (roleresult = result));
      const req = http.expectOne({
        method: 'POST',
        url: `https://vue-completecourse.firebaseio.com/posts.json`,
      });
      req.flush(roles[0]);
      expect(roleresult).toEqual(roles[0]);
    });
    it('should update Role', () => {
      let roleresult: any;
      const roles = generatePosts(1);
      service.updatePost(roles[0]).subscribe(result => (roleresult = result));
      const req = http.expectOne({
        method: 'PATCH',
        url: `https://vue-completecourse.firebaseio.com/posts.json`,
      });
      req.flush(roles[0]);
      expect(roleresult).toEqual(roles[0]);
    });
    it('should delete Role', () => {
      let roleresult: any;
      const roles = generatePosts(1);
      service.updatePost(roles[0]).subscribe(result => (roleresult = result));
      const req = http.expectOne({
        method: 'PATCH',
        url: `https://vue-completecourse.firebaseio.com/posts.json`,
      });
      req.flush(null);
      expect(roleresult).toEqual(null);
    });
  });
});
