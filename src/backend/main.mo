import Array "mo:core/Array";
import Map "mo:core/Map";
import Text "mo:core/Text";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  // Contact Submission Type
  type ContactSubmission = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    requirement : Text;
    isProcessed : Bool;
  };

  module ContactSubmission {
    public func compare(s1 : ContactSubmission, s2 : ContactSubmission) : Order.Order {
      Nat.compare(s1.id, s2.id);
    };
  };

  // In-memory Store for Submissions
  var nextId = 0;
  let submissions = Map.empty<Nat, ContactSubmission>();

  // Add New Submissions
  public shared ({ caller }) func submitContactForm(name : Text, phone : Text, email : Text, requirement : Text) : async Nat {
    let id = nextId;
    let submission : ContactSubmission = {
      id;
      name;
      phone;
      email;
      requirement;
      isProcessed = false;
    };
    submissions.add(id, submission);
    nextId += 1;
    id;
  };

  // Get All Submissions (By Status)
  public query ({ caller }) func getSubmissions(isProcessed : Bool) : async [ContactSubmission] {
    // Filter by status before converting to array
    let filtered = submissions.values().filter(
      func(s) {
        s.isProcessed == isProcessed;
      }
    );

    filtered.toArray().sort(); // Sort by ID (oldest to newest)
  };

  // Get Submission Count (By Status)
  public query ({ caller }) func getSubmissionCount(isProcessed : Bool) : async Nat {
    var count = 0;
    for (s in submissions.values()) {
      if (s.isProcessed == isProcessed) { count += 1 };
    };
    count;
  };

  // Mark Submission as Processed
  public shared ({ caller }) func markAsProcessed(id : Nat) : async () {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission not found") };
      case (?submission) {
        let updatedSubmission : ContactSubmission = {
          id = submission.id;
          name = submission.name;
          phone = submission.phone;
          email = submission.email;
          requirement = submission.requirement;
          isProcessed = true;
        };
        submissions.add(id, updatedSubmission);
      };
    };
  };

  // Delete Submission
  public shared ({ caller }) func deleteSubmission(id : Nat) : async () {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission not found") };
      case (?_) {
        submissions.remove(id);
      };
    };
  };

  // Search Submissions by Email
  public query ({ caller }) func searchByEmail(email : Text) : async [ContactSubmission] {
    submissions.values().toArray().filter(
      func(s) {
        Text.equal(s.email, email);
      }
    );
  };

  // Bulk Mark (All to Processed)
  public shared ({ caller }) func markAllProcessed() : async () {
    for ((id, submission) in submissions.entries()) {
      if (not submission.isProcessed) {
        let updatedSubmission : ContactSubmission = {
          id = submission.id;
          name = submission.name;
          phone = submission.phone;
          email = submission.email;
          requirement = submission.requirement;
          isProcessed = true;
        };
        submissions.add(id, updatedSubmission);
      };
    };
  };

  // Bulk Delete (Processed Only)
  public shared ({ caller }) func deleteProcessed() : async () {
    // Use List to collect processed IDs
    let processedIds = List.empty<Nat>();

    // Identify processed submissions
    for ((id, submission) in submissions.entries()) {
      if (submission.isProcessed) {
        processedIds.add(id);
      };
    };

    // Remove processed submissions
    for (id in processedIds.values()) {
      submissions.remove(id);
    };
  };
};
